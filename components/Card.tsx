import { Maximize2 } from "lucide-react";
import * as React from "react";

export const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-[#fffbf9] rounded-2xl shadow shadow-gray-300 dark:shadow-transparent shadow-2xl p-4 flex flex-col dark:bg-[#1b1b1b] relative">
            {children}
            <div className="absolute bottom-4 right-4">
                <Maximize2 />
            </div>
        </div>
    );
};

export const CardH1 = ({ children }: { children: React.ReactNode }) => {
    return (
        <h3 className="mt-2 text-[#1b1b1b] text-2xl font-semibold dark:text-[#fffbf9]">
            {children}
        </h3>
    );
};

export const CardP = ({ children }: { children: React.ReactNode }) => {
    return (
        <p className="text-md text-[#b1b1b1] mt-6 line-clamp-2 mb-6">{children}</p>
    );
};

export const CardBadges = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-wrap mb-4">{children}</div>;
};

export const Badge = ({ children }: { children: React.ReactNode }) => {
    return (
        <span className="bg-[#ff6d09] mr-2 mb-2 py-1 px-4  text-sm rounded-full text-[#fffbf9] dark:text-[#2f2f2f]">
            {children}
        </span>
    );
};
