'use client'

// import { useState } from "react"

export default function LastPage(){
    // const [win , setWin] = useState(true)
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mb-14 items-center">
               <div className="bg-bg_secondary px-8 py-2 w-max text-3xl font-extrabold uppercase mb-6 shadow-[0.3rem_0.3rem_#FFFFFF]">you loss</div>
              <span className="font-extrabold uppercase text-bg_white px-8">10 wins total</span>  
            </div>
           
            <div className="flex flex-col gap-4 mt-14 justify-center items-center">
                <a href="" className="bg-bg_secondary px-6 py-1 w-max text-xl font-bold uppercase shadow-[0.3rem_0.3rem_#262322]">find another game</a>
                <a href="" className="bg-bg_secondary px-6 py-1 w-max text-xl font-bold uppercase shadow-[0.3rem_0.3rem_#262322]">play with computer</a>
            </div>
        </div>
    )
}