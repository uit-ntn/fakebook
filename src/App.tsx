import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routes/routes";
import NotFound from "./pages/NotFound";
import { getToken } from "./utils/localStorage";

function isJWT(token: string | null) {
    const jwtPattern = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$/;
    return token ? jwtPattern.test(token) : false;
}

function App() {
    const accessToken = getToken();
    const isValidToken = isJWT(accessToken);

    return (
        <Router>
            <Routes>
                {/* Public routes */}
                {publicRoutes.map((route, index) => {
                    const Page = route.page;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}

                {/* Private routes */}
                {privateRoutes.map((route, index) => {
                    const Page = route.page;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                isValidToken ? (
                                    <Page />
                                ) : (
                                    <Navigate to="/auth/login" replace />
                                )
                            }
                        />
                    );
                })}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
