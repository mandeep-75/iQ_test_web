import { Routes, Route } from "react-router";
import { Contact, Home, PageNotFound, Exams } from "../pages";


export const AllRoutes = () => {
    return (
        <div >
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="exams" element={<Exams />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
};