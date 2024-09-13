export default function Header() {
    return (
        <div className="flex justify-between items-center bg-bg_primary p-4 text-bg_secondary">
            <div>
                <h2 className="font-bold text-xl uppercase">Name of Person</h2>
                <p>Win Count</p>
            </div>

            <div>
                <button className="bg-bg_secondary text-bg_primary py-2 px-6 text-xl font-bold">Sign In</button>
            </div>
        </div>
    )
}