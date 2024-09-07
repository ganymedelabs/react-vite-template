import { Route, Routes } from "react-router-dom";
import Home from "./Home.tsx";
import NotFoundPage from "./NotFoundPage.tsx";

export default function App() {
    console.log("test 9");
    return (
        <main className="h-screen bg-black">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
