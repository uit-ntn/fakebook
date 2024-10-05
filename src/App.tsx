import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import NotFound from "./pages/NotFound";

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
        {/* Route này sẽ xử lý tất cả các đường dẫn không tồn tại */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
