import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

export default function App() {
    console.log("test");

    return (
        <main className="h-screen bg-black text-white">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
