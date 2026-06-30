import DesktopIcons from "@/components/common/DesktopIcons";
import Taskbar from "@/components/common/Taskbar";
import GuildMaster from "@/components/GuildMaster/GuildMaster";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import JoinGuide from "@/components/JoinGuide/JoinGuide";
import RecruitInfo from "@/components/Recruit/RecruitInfo";
import Welcome from "@/components/Recruit/Welcome";

export default function Home() {
  return (
    <main>
      <div className="desktop">
        <DesktopIcons />
        <Hero />
        <Intro />
        <GuildMaster />
        <Welcome />
        <RecruitInfo />
        <JoinGuide />
        <Taskbar />
      </div>
    </main>
  );
}