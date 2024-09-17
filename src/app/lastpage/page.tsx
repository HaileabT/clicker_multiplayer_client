import Header from "@/components/Header"
import ContentContainer from "@/components/ContentContainer"
import LastPage from "@/components/LastPage/LastPage"

export default function Finish(){
    return (
        <div className='w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full'>
           <Header />
           <ContentContainer component={LastPage}/>
        </div>
    )
}