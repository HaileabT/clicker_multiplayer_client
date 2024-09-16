import ContentContainer from "@/components/ContentContainer";
import EnterMode from "@/components/home/EnterMode";

export default function Home() {
  return (
    <div className="w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full p-10">
      <ContentContainer component={EnterMode} />
    </div>
  )
}
