export default function Header() {
    return (
        <div className="flex justify-between items-center bg-bg_primary my-5 h-12 px-3 shadow-bottom-left">
           <p className="font-black">USERNAME</p>
           <button className="bg-bg_secondary text-bg_white px-2 py-1 hover:bg-bg_black">LOG OUT</button>
        </div>
    )
}