export default async function EnterMode() {
    return (<div className="flex flex-col gap-5 items-center">
  <a href="/signup" className={"bg-bg_secondary px-8 py-2 w-max text-3xl font-extrabold text-bg_black shadow-[0.3rem_0.3rem_#262322] uppercase cursor-pointer"}>Sign Up</a>
    <a href="/signin" className="bg-bg_secondary px-8 py-2 w-max text-3xl font-extrabold text-bg_black shadow-[0.3rem_0.3rem_#262322] uppercase cursor-pointer">Login</a>
      <a href="/game" className="bg-bg_secondary px-8 py-2 w-max text-3xl font-extrabold text-bg_black shadow-[0.3rem_0.3rem_#262322] uppercase cursor-pointer">Play as Guest</a>
        </div>)
}