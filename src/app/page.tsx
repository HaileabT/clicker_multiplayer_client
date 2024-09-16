import ContentContainer from "@/components/ContentContainer";
import EnterMode from "@/components/home/EnterMode";
import Menu from "@/components/Menu";

export default async function Home() {

  return (
    <div className="w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full">
      <ContentContainer component={EnterMode} />
    </div>
  )
}

