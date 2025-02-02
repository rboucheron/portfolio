'use client'; 
import React from 'react';
import { ReactTyped } from "react-typed";
import { useScopedI18n } from "@/locales/client";

const Subtitle = () => {
    const translation = useScopedI18n("landing");
    return (
        <>
            <ReactTyped strings={[translation('badge.study'),  translation('badge.job')]} typeSpeed={50} className='dark:text-background text-foreground' />
        </>
    );
}

export default Subtitle;