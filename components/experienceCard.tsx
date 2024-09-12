import React, {ReactNode} from 'react';
import Image from "next/image";


const ExperienceCard = ({children}: { children: ReactNode }) => {
    return (
        <div className="mt-0 mb-0 py-6 border-l-2 border-[#ff6d0a] relative">
            <div className="ml-10 grid grid-cols-1 lg:grid-cols-2 ">
                {children}
            </div>

            <div className="w-4 h-4 p-4 bg-[#F54703] rounded-full absolute -left-4 top-10"></div>
        </div>
    );
}

export const ExperienceH1 = ({children}: { children: ReactNode }) => {
    return (
        <h1 className="mt-2 text-[#101827] text-2xl font-normal dark:text-[#fffbf9]">{children}</h1>
    )
}

export const ExperienceImage = ({src, alt}: { src: string; alt: string }) => {
    return (
        <>
            <div className=" flex lg:justify-center mt-5 lg:mt-0">
                <Image src={src} alt={alt} width={1000} height={1000}
                       className="rounded-md w-11/12 lg:w-4/5"/>
            </div>
        </>
    )
}

export const ExperienceP = ({children}: { children: ReactNode }) => {
    return (<p className=" mt-2 text-sm text-gray-500">{children}</p>)
}


export default ExperienceCard;
