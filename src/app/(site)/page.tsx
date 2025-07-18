import HomeBanner from "@/components/section/home/banner";
import CkGameDebugger from "@/components/section/home/ckgame-debugger";
import HomeDiscordSection from "@/components/section/home/discord";
import HomeMarquee from "@/components/section/home/marquee";
import HomeNotice from "@/components/section/home/notice";

export default function Home() {
  return (
    <main>
      <HomeNotice />
      <HomeBanner />
      <HomeMarquee />
      <CkGameDebugger />
      <HomeDiscordSection />
    </main>
  );
}
