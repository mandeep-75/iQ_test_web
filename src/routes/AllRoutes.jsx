import { Routes, Route } from "react-router";
import { Home, PageNotFound } from "../pages";


export const AllRoutes = () => {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};