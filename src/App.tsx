import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function App() {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const currentUrl = location.search;

        if (currentUrl.startsWith("/?/")) {
            const extractedPath = currentUrl.replace("/?/", "");

            navigate(`/${extractedPath}`, { replace: true });
        }
    }, [location, navigate]);

    return (
        <main className="h-screen bg-black text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
