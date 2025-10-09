import Image from "next/image";
import HomePage from "./home/page";
import MobileDocumentationPage from "./frontend-mobile/page";

export default function Home() {
  return (
    <div className="">
<HomePage/>
<MobileDocumentationPage/>

    </div>
  );
}