import ContentContainer from "@/components/ContentContainer";
import SignupContent from "@/components/signup/SignupContent";

export default function SignupPage() {
  return (
    <div className="w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full p-10">
      <ContentContainer component={SignupContent} props={{age: 10}} />
    </div>
  )
}
