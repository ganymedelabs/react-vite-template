import { Outlet } from "react-router-dom";

export default function App() {
    console.log("test 8");
    return (
        <main className="h-screen bg-black text-green-100">
            <Outlet />
        </main>
    );
}
