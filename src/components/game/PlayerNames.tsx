export default function PlayerName(){
    return (
        <div className="flex flex-row justify-between bg-bg_secondary shadow-[0.5rem_0.5rem_#262322] px-4 py-2">
            <div className=" text-bg_black text-start">
               <h3 className="font-extrabold">USERNAME</h3> 
               <p className="font-semibold">Wins</p>
            </div>
            <div className=" text-bg_black text-end">
               <h3 className="font-extrabold">OPPONENT NAME</h3> 
               <p className="font-semibold">Wins</p>
            </div>
        </div>
    );
}