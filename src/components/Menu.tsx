"use client";

import Link from "next/link";
import { useState } from "react";

export default function Menu() {
  const [showState, setShowState] = useState<boolean>(false);

  const toggleShowState = (): void => {
    setShowState((prev: boolean) => {
      return !prev;
    });
  };

  return (
    <>
      <div
        className="fixed bottom-0 left-0 bg-bg_black pt-8 pb-6 px-6 font-extrabold text-xl cursor-pointer z-40"
        onClick={toggleShowState}
      >
        <div
          className={`${
            showState === false ? "" : "absolute bottom-6 left-6"
          } `}
        >
          {showState === false ? "MENU" : "CLOSE"}
        </div>
        <div
          className={
            `${showState === false ? "bottom-[-60vh] " : " bottom-0 "}` +
            " h-[50vh] bg-bg_black px-6 py-6 w-max absolute left-0 flex flex-col gap-5 transition-all duration-300 z-[-1]"
          }
        >
          <Link
            href="/profile"
            className={
              `${showState === false ? "bottom-[-25vh]" : "bottom-0"}` +
              " relative bg-bg_primary shadow-[0.2rem_0.2rem_#00D1FF] px-10 py-2 font-extrabold text-bg_black delay-100 transition-all duration-300"
            }
          >
            PROFILE
          </Link>
          <Link
            href="/profile"
            className={
              `${showState === false ? "bottom-[-25vh]" : "bottom-0"}` +
              " relative bg-bg_primary shadow-[0.2rem_0.2rem_#00D1FF] px-10 py-2 font-extrabold text-bg_black delay-150 transition-all duration-300"
            }
          >
            LOGOUT
          </Link>
        </div>
      </div>
           {showState && <div className=" absolute backdrop-blur-[10px] h-full w-full z-[1] top-0 left-0" onClick={toggleShowState}>

            </div> }
    </>
  );
}
