import React from "react";
import Image from "next/image";
import { useLang } from "@/lib/store";

const ToggleLang = () => {
  const { lang, updateLang } = useLang();

  const handleClick = () => {
    const newLang = lang === "fr" ? "eng" : "fr";
    updateLang(newLang);
  };

  return (
    <div
      onClick={handleClick}
      className="grid justify-items-center cursor-pointer"
    >
      {lang === "fr" ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_10559)">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#F0F0F0"
            />
            <path
              d="M11.4783 12H24C24 10.9169 23.8556 9.86768 23.5866 8.86957H11.4783V12Z"
              fill="#D80027"
            />
            <path
              d="M11.4783 5.73916H22.2387C21.5041 4.54047 20.5649 3.48095 19.4698 2.6087H11.4783V5.73916Z"
              fill="#D80027"
            />
            <path
              d="M12 24C14.8242 24 17.42 23.0239 19.4698 21.3914H4.53021C6.58006 23.0239 9.17585 24 12 24Z"
              fill="#D80027"
            />
            <path
              d="M1.76128 18.2609H22.2387C22.8285 17.2986 23.2858 16.2467 23.5866 15.1304H0.413391C0.714188 16.2467 1.17155 17.2986 1.76128 18.2609Z"
              fill="#D80027"
            />
            <path
              d="M5.55863 1.87397H6.65217L5.63498 2.61295L6.02353 3.80869L5.00639 3.0697L3.98925 3.80869L4.32487 2.7757C3.42928 3.52172 2.64431 4.39575 1.99744 5.36963H2.34783L1.70034 5.84002C1.59947 6.0083 1.50272 6.17925 1.41 6.35273L1.71919 7.30434L1.14234 6.88523C0.998953 7.18903 0.867797 7.49967 0.749906 7.81678L1.09055 8.86528H2.34783L1.33064 9.60427L1.71919 10.8L0.702047 10.061L0.0927656 10.5037C0.0317812 10.9939 0 11.4932 0 12H12C12 5.37262 12 4.59131 12 0C9.62944 0 7.41961 0.687656 5.55863 1.87397ZM6.02353 10.8L5.00639 10.061L3.98925 10.8L4.3778 9.60427L3.36061 8.86528H4.61789L5.00639 7.66955L5.39489 8.86528H6.65217L5.63498 9.60427L6.02353 10.8ZM5.63498 6.10861L6.02353 7.30434L5.00639 6.56536L3.98925 7.30434L4.3778 6.10861L3.36061 5.36963H4.61789L5.00639 4.17389L5.39489 5.36963H6.65217L5.63498 6.10861ZM10.3279 10.8L9.31073 10.061L8.29359 10.8L8.68214 9.60427L7.66495 8.86528H8.92223L9.31073 7.66955L9.69923 8.86528H10.9565L9.93933 9.60427L10.3279 10.8ZM9.93933 6.10861L10.3279 7.30434L9.31073 6.56536L8.29359 7.30434L8.68214 6.10861L7.66495 5.36963H8.92223L9.31073 4.17389L9.69923 5.36963H10.9565L9.93933 6.10861ZM9.93933 2.61295L10.3279 3.80869L9.31073 3.0697L8.29359 3.80869L8.68214 2.61295L7.66495 1.87397H8.92223L9.31073 0.678234L9.69923 1.87397H10.9565L9.93933 2.61295Z"
              fill="#0052B4"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_10559">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_6_9894)">
            <path
              d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
              fill="#F0F0F0"
            />
            <path
              d="M24 12C24 6.84043 20.7435 2.44191 16.1739 0.746399V23.2537C20.7435 21.5581 24 17.1596 24 12Z"
              fill="#D80027"
            />
            <path
              d="M0 12C0 17.1596 3.25655 21.5581 7.82611 23.2536V0.746399C3.25655 2.44191 0 6.84043 0 12Z"
              fill="#0052B4"
            />
          </g>
          <defs>
            <clipPath id="clip0_6_9894">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )}
    </div>
  );
};

export default ToggleLang;
