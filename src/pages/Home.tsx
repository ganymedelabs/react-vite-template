import React, { useEffect, useRef, useState } from "react";
import Image from "../components/Image.tsx";

export default function Home() {
    const [isSpinning, setIsSpinning] = useState<boolean>(true);
    const [rotation, setRotation] = useState<number>(0);
    const logoRef = useRef<HTMLImageElement | null>(null);

    const handleSpacebarPress = (event: KeyboardEvent) => {
        if (event.key === " ") {
            if (!logoRef.current) return;

            const computedStyle = window.getComputedStyle(logoRef.current);
            const { transform } = computedStyle;

            let currentRotation = rotation;
            if (transform !== "none") {
                const values = transform.split("(")[1].split(")")[0].split(",");
                const a = parseFloat(values[0]);
                const b = parseFloat(values[1]);
                currentRotation = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            }

            setIsSpinning((prevIsSpinning) => !prevIsSpinning);
            setRotation(currentRotation);
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", handleSpacebarPress);
        return () => {
            window.removeEventListener("keydown", handleSpacebarPress);
        };
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const imageStyle: React.CSSProperties = {
        transform: `rotate(${rotation}deg)`,
        transition: isSpinning ? "none" : "transform 0.5s ease-out",
    };

    const spinAnimation = `@keyframes spin {
        from { transform: rotate(${rotation}deg); }
        to { transform: rotate(${rotation + 360}deg); }
    }`;

    useEffect(() => {
        const styleElement = document.createElement("style");
        styleElement.innerHTML = spinAnimation;
        document.head.appendChild(styleElement);

        return () => {
            document.head.removeChild(styleElement);
        };
    }, [rotation]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <div className="relative flex h-screen items-center justify-center font-sans">
            <div className="absolute h-80 w-80 bg-secondary blur-[10rem]" />
            <div className="z-10">
                <Image
                    ref={logoRef}
                    style={imageStyle}
                    className={`ml-auto mr-auto block h-48 w-48 ${isSpinning ? "animate-spin-infinite" : ""}`}
                    src={`${import.meta.env.VITE_PUBLIC_URL}/images/logo.png`}
                    alt="Discontinued Labs Logo"
                />
                <h1 className="text-center">React Vite Template</h1>
                <p className="text-center text-lg">
                    Created by <a href="https://github.com/ganymedelabs">Discontinued Labs</a>
                </p>
                <p className="text-center text-sm">
                    <a href="https://github.com/ganymedelabs/react-vite-template">View on GitHub</a>
                </p>
            </div>
        </div>
    );
}
