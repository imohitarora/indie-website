"use client";

import { Rocket } from "lucide-react";

export function HeroIcon() {
    return (
        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#178998] to-[#178998] p-3 shadow-lg">
            <Rocket className="w-full h-full text-white" />
        </div>
    );
}