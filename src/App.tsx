import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.tsx";
import NotFoundPage from "./components/NotFoundPage.tsx";

export default function App() {
    console.log("test 1");
    return (
        <main className="h-screen bg-black text-blue-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
