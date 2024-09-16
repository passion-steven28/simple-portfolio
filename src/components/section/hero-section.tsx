import React from "react";
import Image from "next/image";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HeroSection() {
    return (
        <section className="size-full flex flex-col items-center justify-center">
            <div className="relative">
                <div className="absolute top-0 -left-10 -rotate-6 z-10 flex items-center justify-center">
                    <HoverBorderGradient>
                        <h1>passion</h1><span>👋</span>
                    </HoverBorderGradient>
                </div>
                <div className="relative size-60 rounded-full overflow-hidden border-4 border-neutral-900 dark:border-neutral-600">
                    <Image
                        src="/images/hero-image.jpg"
                        alt="hero-image"
                        fill
                        className="size-full object-cover"
                    />
                </div>
            </div>
            <h2 className="text-center text-xl md:text-2xl lg:text-4xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                Building digital products, brands, and services.
            </h2>
        </section>
    );
}
