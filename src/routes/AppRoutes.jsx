import { Route, Routes } from "react-router-dom";
import { About, Dashboard, Error404, Login } from "../pages";
import { RootLayout } from "../layouts";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="about" element={<About />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
    );
};

export default AppRoutes;
