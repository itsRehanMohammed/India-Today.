import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NewsItems from "./Components/News/NewsItems";

const App = () => {
  const pageSize = 15;
  const [progress, setProgress] = useState(0);
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                category={"general"}
                pageSize={pageSize}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key={"business"}
                category="business"
                pageSize={pageSize}
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key={"entertainment"}
                category="entertainment"
                pageSize={pageSize}
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key={"health"}
                category="health"
                pageSize={pageSize}
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key={"science"}
                category="science"
                pageSize={pageSize}
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key={"sports"}
                category="sports"
                pageSize={pageSize}
              />
            }
          >
            {" "}
          </Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key={"technology"}
                category="technology"
                pageSize={pageSize}
              />
            }
          >
            {" "}
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
