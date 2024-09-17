import ContentContainer from "@/components/ContentContainer";
import Header from "@/components/Header";
import Loader from "@/components/Loader/Loader";


export default function Loaderpage(){
  return (
        <div className='w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full'>
            <Header />
            <ContentContainer component={Loader}/>
        </div>
   )
    
}