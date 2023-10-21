import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { useLocation } from "react-router";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

import App from "./App";
import AvaList from "pages/AvaList";
import Home from "pages/Home";
import WhitePaper from "pages/WhitePaper";
import NewsList from "pages/NewsList";
import NewsDescription from "pages/NewsDescription";
// import AvaDescription  from "pages/AvaDescription";
import AfterCoin from "pages/AfterCoin";
import AvaDescription from "pages/AvaDescription";

const ScrollToTop = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="nft" element={<Home />} />
            <Route path="white-paper" element={<WhitePaper />} />
            <Route path="market-place" element={<AvaList />} />
            <Route path="after-coin" element={<AfterCoin />} />
            <Route path="news-room" element={<NewsList />} />
            <Route path="news/:id" element={<NewsDescription />} />
            <Route path="ava-description/:id" element={<AvaDescription />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There&rsquo;s nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
