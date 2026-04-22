import ProfileCard from "@/components/ProfileCard";
import { Meteors } from "@/components/magicui/meteors";

const Index = () => (
  <div className="relative flex min-h-screen items-center justify-center bg-background overflow-hidden">
    <Meteors number={30} />
    <div className="z-10 w-full flex justify-center items-center px-4">
      <ProfileCard />
    </div>
  </div>
);
export default Index;
