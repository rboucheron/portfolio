import Image from "next/image";

const ProjectNav = () => {
  return (
    <div className="fixed top-12 w-full h-screen bg-[#2f2f2f] bg-opacity-60 dark:bg-opacity-25 dark:bg-[#fffbf9]">
      <div
        className="w-full bg-[#fffbf9] dark:bg-[#2f2f2f] grid grid-cols-4 p-4 pt-8 gap-4 "
        onMouseOver={(e) => e.stopPropagation()}
      >
        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center cursor-pointer">
            Web Documentaire
          </h2>
          <div className="grid justify-items-center mt-2">
            <Image
              src="/img/logo_sae302.svg"
              alt="logo l écho des écologues"
              width={100}
              height={100}
            />
          </div>
        </div>

        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center">Site Vitrine</h2>

          <div className="grid justify-items-center mt-2">
            <Image
              src="/img/logo_sae303.png"
              alt="ac2fl"
              width={80}
              height={80}
            />
          </div>
        </div>
        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center">Application Web</h2>
          <div className="grid justify-items-center mt-2 ">
            <Image
              src="/img/logo_sae401.png"
              alt="Sushy House"
              width={80}
              height={80}
              className="bg-[#2f2f2f] p-2 rounded-md"
            />
          </div>
        </div>

        <div className="cursor-pointer hover:bg-gray-200 rounded-sm p-2 transition delay-150 duration-300 ease-in-out">
          <h2 className="text-md font-semibold text-center">Site Web 3D</h2>
          <div className="grid justify-items-center mt-2">
            <Image
              src="/img/logo_sae402.png"
              alt="Le buggy"
              width={80}
              height={80}
              className="bg-[#fffbf9] p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectNav;
