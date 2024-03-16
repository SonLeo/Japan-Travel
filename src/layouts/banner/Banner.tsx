"use client"
import { useEffect } from "react"
import styles from "./Banner.module.css"
import Typed from "typed.js";

export default function Banner() {
    useEffect(() => {
        const options = {
            strings: ["Unforgettable Adventures in Japan", "Authentic Japanese Experiences", "Experience Japan Like Never Before", "Dreaming of Japan? Let's Make It Real"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        };

        const typed = new Typed('.typed', options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className="relative bg-[url('https://i.imgur.com/7Lo6xbE.png')] w-full h-screen bg-cover bg-fixed bg-center relative overflow-hidden text-white">
                <div className="z-2 min-w-min absolute top-1/2 left-1/2 transform -translate-y-1/2">
                    <h1 className={`${styles["text-shadow"]} text-5xl`}>Japan travel</h1>
                    <p className={`${styles["text-shadow"]} text-2xl`}>
                        <span className="typed"></span><span className="typed-cursor" aria-hidden="true"></span>
                    </p>
                </div>
            </div>
        </>
    )
}