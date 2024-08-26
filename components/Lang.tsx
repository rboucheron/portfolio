"use client";
import React, { ReactNode, ReactElement, useState } from "react";
import { useLang } from "@/lib/store";

interface LangProps {
  children: ReactNode;
}

export const Fr: React.FC<LangProps> = ({ children }) => <>{children}</>;
export const Eng: React.FC<LangProps> = ({ children }) => <>{children}</>;


export const Lang = ({ children }: { children: React.ReactNode }) => {
  const { lang } = useLang();

  return (
    <>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return null;

        if (lang === "fr" && child.type === Fr) {
          return React.cloneElement(child, { key: `fr-${index}` });
        }

        if (lang === "eng" && child.type === Eng) {
          return React.cloneElement(child, { key: `eng-${index}` });
        }

        return null;
      })}
    </>
  );
};
