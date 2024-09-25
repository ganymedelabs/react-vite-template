import { Link } from "react-router-dom";
import React from "react";
import Image from "../components/Image.tsx";

export default function NotFoundPage(): React.JSX.Element {
    return (
        <div className="relative flex h-screen items-center justify-center font-sans">
            <div className="absolute h-80 w-80 bg-[#6d1b1b] blur-[10rem]" />
            <div className="z-10">
                <Image
                    className="ml-auto mr-auto block h-48 w-48"
                    src={`${import.meta.env.VITE_PUBLIC_URL}/images/logo.png`}
                    alt="Discontinued Labs Logo"
                />
                <h1 className="text-center">Not Found!</h1>
                <p className="text-center">
                    Go back <Link to="/">home</Link>.
                </p>
            </div>
        </div>
    );
}
