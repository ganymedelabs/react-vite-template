import { Outlet } from "react-router-dom";

export default function App() {
    console.log("test 9");
    return (
        <main className="h-screen bg-black text-yellow-100">
            <Outlet />
        </main>
    );
}
