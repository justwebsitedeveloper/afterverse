import { useEffect, useState, useRef } from "react";
import "./Marquee.css";

const Child = ({ disableScroll, invisible, children, childMargin }) => (
  <span
    style={{
      margin: disableScroll ? "0" : `0 ${childMargin}px`,
      visibility: invisible ? "hidden" : "",
    }}
  >
    {children}
  </span>
);

function translateXCSS(numPx) {
  return `translateX(${numPx}px)`;
}

export const ScrollWhen = {
  always: 0,
  overflow: 100,
};

function Marquee({
  childMargin = 15,
  children = null,
  delay = 300,
  direction = "left",
  scrollWhen = "always",
  speed = 0.04,
}) {
  const [disableScroll, setDisableScroll] = useState();
  const containerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    // _resetPosition

    const width = innerRef.current?.clientWidth || 0;

    // _getInitialPosition
    function _getInitalPosition() {
      return direction === "right" ? -(width / 2) - childMargin : -childMargin;
    }
    // End of _getInitialPosition
    let x = _getInitalPosition();

    // _hasRefs
    const hasRefs = containerRef.current && innerRef.current;
    // End of _hasRefs

    // _updateScrollState
    function _updateScrollState() {
      if (hasRefs) {
        const shouldDisableScroll = !_shouldAnimate();
        if (disableScroll !== shouldDisableScroll) {
          setDisableScroll(shouldDisableScroll);
          innerRef.current.style.transform = translateXCSS(0);
        }
      }
    }
    // End of _updateScrollState

    // _getMarqueeFillPercent
    const marqueeFillPercent =
      hasRefs && containerRef.current.clientWidth > 0
        ? ((innerRef.current.scrollWidth / 2) * 100) /
          containerRef.current.clientWidth
        : 0;
    // End of _getMarqueeFillPercent

    // _shouldAnimate
    function _shouldAnimate() {
      return (
        hasRefs &&
        innerRef.current.scrollWidth > containerRef.current.clientWidth &&
        marqueeFillPercent > ScrollWhen[scrollWhen]
      );
    }
    // End of _shouldAnimate

    if (_shouldAnimate()) {
      innerRef.current.style.transform = translateXCSS(x);
    }

    _updateScrollState();

    // End of _resetPosition

    // _requestAnimationWithDelay

    // _requestAnimationIfNeeded
    let lastRequestId, lastTickTime;

    const _requestAnimationIfNeeded = () => {
      const _tick = (time) => {
        if (lastTickTime) {
          // _updateInnerPosition
          const timeDelta = time - lastTickTime;
          const nextPosX = (() => {
            if (direction === "right") {
              const nextPos = x + timeDelta * speed;
              return nextPos > -childMargin ? _getInitalPosition() : nextPos;
            }
            if (direction === "left") {
              const nextPos = x - timeDelta * speed;
              return nextPos < -(width / 2) - childMargin
                ? _getInitalPosition()
                : nextPos;
            }

            return x;
          })();

          x = nextPosX;

          if (_shouldAnimate()) {
            innerRef.current.style.transform = translateXCSS(x);
          }
          // End of _updateInnerPosition
        }

        lastTickTime = time;
        _requestAnimationIfNeeded();
        _updateScrollState();
      };
      lastRequestId = window.requestAnimationFrame(_tick);
    };
    // End of _requestAnimationIfNeeded

    setTimeout(_requestAnimationIfNeeded, delay);

    // End of _requestAnimationWithDelay

    return function cleanup() {
      window.cancelAnimationFrame(lastRequestId);
    };
  }, [
    childMargin,
    delay,
    disableScroll,
    direction,
    innerRef,
    scrollWhen,
    speed,
  ]);

  return (
    <div
      className="marquee"
      style={{
        width: "100%",
        whiteSpace: "nowrap",
      }}
    >
      <div
        ref={containerRef}
        style={{
          overflowX: "hidden",
        }}
      >
        <div
          ref={innerRef}
          style={{
            display: "inline-block",
          }}
        >
          <Child>{children}</Child>
          <Child invisible={disableScroll} childMargin={childMargin}>
            {children}
          </Child>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
