import ContentContainer from "@/components/ContentContainer";
import SigninContent from "@/components/signin/SignInContent";

export default function SignInPage() {
  return (
    <div className="w-[calc(100%-10rem)] flex flex-col gap-[2.5rem] max-w-[100rem] h-full">
      <ContentContainer component={SigninContent} props={{age: 10}} />
    </div>
  )
}
