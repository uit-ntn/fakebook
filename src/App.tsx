import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import NotFound from "./pages/NotFound";
import { getToken } from "./utils/localStorage";

function isJWT(token) {
    const jwtPattern = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$/;
    return jwtPattern.test(token);
}

function App() {
    const accessToken = getToken();
    const isValidToken = isJWT(accessToken);

    return (
        <Router>
            <Routes>
                {isValidToken
                    ? privateRoutes.map((route, index) => {
                          const Page = route.page;
                          return <Route key={index} path={route.path} element={<Page />} />;
                      })
                    : publicRoutes.map((route, index) => {
                          const Page = route.page;
                          return <Route key={index} path={route.path} element={<Page />} />;
                      })}
                {/* Route này sẽ xử lý tất cả các đường dẫn không tồn tại */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
