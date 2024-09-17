import Header from "@/components/Header"
import ContentContainer from "@/components/ContentContainer"
import StartGame from "@/components/joinGame/StartGame"

export default function Starter(){
    return (
        <div className='w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full'>
            <Header />
            <ContentContainer component = {StartGame}/>
        </div>
    )
}
