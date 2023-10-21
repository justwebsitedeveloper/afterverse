import Container from "react-bootstrap/Container";

import "./HeroBanner.css";

function HeroBanner({ bgImage, className, children, style }) {
  return (
    <div className={`hero-banner ${className}`} style={{ backgroundImage: `url(${bgImage})`, ...style }}>
      <Container>
        {children}
      </Container>
    </div>
  );
}

export default HeroBanner;
