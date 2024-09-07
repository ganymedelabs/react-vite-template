import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

export default function App() {
    console.log("test 7");
    return (
        <main className="h-screen bg-black text-orange-100">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
