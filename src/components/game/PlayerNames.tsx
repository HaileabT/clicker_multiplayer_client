export default function PlayerName(){
    return (
        <div className="flex flex-row justify-between bg-bg_secondary shadow-[0.5rem_0.5rem_#262322] px-8 py-4 items-center">
            <div className=" text-bg_black text-start flex flex-col gap-[0.5px] justify-center">
               <h3 className="font-extrabold">USERNAME</h3> 
               <p className="font-semibold">Wins</p>
            </div>
            <div className=" text-bg_black text-end flex flex-col gap-[0.5px] justify-center">
               <h3 className="font-extrabold">OPPONENT NAME</h3> 
               <p className="font-semibold">Wins</p>
            </div>
        </div>
    );
}