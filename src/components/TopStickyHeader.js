"use client";
import React from "react";

export default function TopStickyHeader() {
    return (
        <div
            className="h-[55px] flex items-center justify-center relative overflow-hidden"
            style={{
                // background: "linear-gradient(90deg, #0F172A 0%, #1E293B 100%)",
                background: "linear-gradient(90deg, #122247 0%, #32B993 100%)",

            }}
        >
            <p className="text-white text-sm md:text-base font-semibold tracking-widest ">
                🚀 New Branches Coming Soon
            </p>
        </div>
    );
}
