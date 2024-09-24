import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

export default function App() {
    return (
        <main className="h-screen bg-black text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
