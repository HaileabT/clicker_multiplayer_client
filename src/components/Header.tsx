export default function Header() {
    return (
        <div className="flex justify-between items-center bg-bg_primary h-max px-5 py-3 shadow-[0.5rem_0.5rem_#262322]">
           <p className=" text-bg_black font-extrabold text-2xl">USERNAME</p>
           <button className="bg-bg_secondary px-4 py-2 text-lg font-extrabold text-bg_black shadow-[0.3rem_0.3rem_#262322]">LOG OUT</button>
        </div>
    )
}