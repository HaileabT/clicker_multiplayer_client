'use client'
import { useState } from "react"

interface GamePlaceProps {
    LeftUser: () => void;  
    RightUser: () => void; 
    width: {
      col1: string;  
      col2: string;  
    };
  }

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
        <div className="flex  flex-col bg-bg_primary h-5/6 mt-2 shadow-bottom-left px-7">
           <PlayerName />
           <GamePlace LeftUser={LeftUser} RightUser={RightUser} width={width} />
           <div className="flex justify-center">
            <button className="bg-bg_secondary mt-7 w-24 p-2">Quit</button>
           </div>
        </div>
    );
}

function PlayerName(){
    return (
        <div className="flex flex-row justify-between bg-bg_secondary mt-9 shadow-bottom-left">
            <div className="ml-4 my-2">
               <h3 className="font-bold">USERNAME</h3> 
               <p>wins</p>
            </div>
            <div className="mr-4 my-2">
               <h3 className="font-bold">Opponent Name</h3> 
               <p>wins</p>
            </div>
        </div>
    );
}

function GamePlace({ LeftUser, RightUser, width } : GamePlaceProps) {
    return (
      <div className="grid h-4/6 mt-7 rounded" style={{ gridTemplateColumns: `${width.col1} ${width.col2}` }}>
        <div onClick={LeftUser} className="bg-bg_secondary"></div>
        <div onClick={RightUser} className="bg-bg_black"></div>
      </div>
    );
}

