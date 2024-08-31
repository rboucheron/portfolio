import React from "react";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="xl:w-1/2 lg:w-3/4 sm:w-1/2 place-content-center place-items-center m-auto grid grid-cols-3 lg:grid-cols-5 mt-10 sm:gap-2 lg:gap-4" >
      <Skill imageSrc="/img/typescript.png" imageAlt="TypeScript" title="TypeScript"/>
      <Skill imageSrc="/img/php.svg" imageAlt="Php" title="Php" />
      <Skill imageSrc="/img/pgsql.svg" imageAlt="postgresql" title="PostgreSql" />
      <Skill imageSrc="/img/scss.svg" imageAlt="Scss" title="Scss" />
      <Skill imageSrc="/img/git.png" imageAlt="Git" title="Git" />
      <Skill imageSrc="/img/symfony.svg" imageAlt="symfony" title="Symfony" />
      <Skill imageSrc="/img/react.svg" imageAlt="React" title="React" />
      <Skill imageSrc="/img/next.svg" imageAlt="nextjs" title="NextJS" />
      <Skill imageSrc="/img/tailwind.svg" imageAlt="TailwindCss" title="TailwindCss" />
      <Skill imageSrc="/img/angular.svg" imageAlt="angular" title="Angular" />
    </div>
  );
};

const Skill = ({
  imageSrc,
  imageAlt,
  title,
}: {
  imageSrc: string;
  imageAlt: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col w-24 lg:w-32 items-center  p-4 ">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={60}
        height={60}
        className="select-none"
        draggable="false"
      />
      <h3 className="text-sm font-extralight text-center mt-4 select-none">{title}</h3>
    </div>
  );
};

export default Skills;
