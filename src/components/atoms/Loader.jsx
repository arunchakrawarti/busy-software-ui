"use client";
import Image from "next/image";

import React from "react";

const Loader = () => {
    return (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-white bg-blur-[1rem] z-99 bg-opacity-10">
            <div className="relative w-32 md:w-36  h-32 md:h-36 lg:w-40 lg:h-40 flex items-center justify-center">

                {/* Rotating Circle */}
                <div className="absolute inset-0 rounded-full border border-[#2c54c2] border-r-gray-400 animate-spin"></div>

                {/* Logo */}
                <div className="text-[#7C4DFF] overflow-hidden text-5xl font-bold w-full h-full flex items-center justify-center mx-auto">
                    <Image src="/img/logo.png" alt="profile" width={100} height={100} className="w-24 h-24 lg:w-34 lg:h-34" />
                </div>
            </div>
        </div>
    );
};

export default Loader;