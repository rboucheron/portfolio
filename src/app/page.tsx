"use client"
import React from 'react'
import TitleEffect, {Title, SubTitle} from '@/components/TitleEffect/TitleEffect'

export default function Home() {
  return (
    <TitleEffect className="w-full flex flex-col items-center mt-44 space-y-4">
      <Title className="text-primary text-7xl font-bold text-center">Raphaël Boucheron</Title>
      <SubTitle className="text-md">Développeur fullstack junior, passionné par l'informatique</SubTitle>
    </TitleEffect>

  )
}
