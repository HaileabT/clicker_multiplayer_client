'use client'
import { useState } from "react"
import PlayerName from "./PlayerNames";
import GamePlace from "./GamePlace";


export default function GameBoard(){
 const [width , setWidth] = useState({ col1: '50%', col2: '50%' });

 function LeftUser(){
    setWidth((prev) => {
        const newCol1Size = Math.min(100, Math.max(0, parseFloat(prev.col1) + 10));
        const newCol2Size = Math.min(100, Math.max(0, parseFloat(prev.col2) - 10));

        return {
            col1: `${newCol1Size}%`,
            col2: `${newCol2Size}%`,
        };
    });
 }

 function RightUser(){
    setWidth((prev) => {
        const newCol1Size = Math.min(100, Math.max(0, parseFloat(prev.col1) - 10));
        const newCol2Size = Math.min(100, Math.max(0, parseFloat(prev.col2) + 10));

        return {
            col1: `${newCol1Size}%`,
            col2: `${newCol2Size}%`,
        };
    });
 }

    return (
        <div className="flex h-full flex-col gap-[2.5rem] bg-bg_primary shadow-[0.6rem_0.6rem_#262322] p-10">
           <PlayerName />
           <GamePlace LeftUser={LeftUser} RightUser={RightUser} width={width} />
           <div className="flex justify-center">
            <button className="bg-bg_secondary px-8 py-2 text-lg font-extrabold text-bg_black shadow-[0.3rem_0.3rem_#262322]">Quit</button>
           </div>
        </div>
    );
}
