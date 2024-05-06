import React, { useRef, ReactNode } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

interface TitleEffectProps {
  children: ReactNode;
  className?: string;
}

const TitleEffect = ({ children, className }: TitleEffectProps) => {
  const container = useRef<HTMLDivElement>(null)
  useGSAP(() => {
      gsap.from('.box', { rotateX: '+=160', duration: 2 })
      gsap.to('.box', { rotateX: '-=160', duration: 2 })
    },
    { scope: container }
  )
  return (
    <div className={className} ref={container}>
      {children}
    </div>
  )
}

export const Title = ({ children, className }: TitleEffectProps) => {
  return (
    <h1 className={`box ${className}`}>
      {children}
    </h1>
  )
}

export const SubTitle = ({ children, className }: TitleEffectProps) => {
  return (
    <h2 className={className}>
      {children}
    </h2>
  )
}

export default TitleEffect
