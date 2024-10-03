import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.page;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Page />}
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
