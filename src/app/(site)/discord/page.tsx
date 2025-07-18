"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function DiscordPage() {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.location.href = "discord://discord.gg/invite/n9z8hwZjuh";
      }
    }, 3000);
  }, []);

  return (
    <main className="flex items-center justify-center py-10 flex-col gap-5">
      <h1 className="text-3xl font-bold">디스코드 앱으로 계속합니다..</h1>
      <p className="text-center text-secondary-foreground">
        3초 뒤 사용자 기기의 디스코드 앱이 자동으로 실행됩니다.
        <br />
        실행되지 않는다면, 컴퓨터에 디스코드가 설치되어 있지 않은 것일 수
        있습니다.
        <br />
        혹시 위와 같은 상황이 발생하셨다면,{" "}
        <Link
          className="underline hover:text-primary"
          href={"https://discord.gg/invite/n9z8hwZjuh"}
          target="_blank"
        >
          브라우저
        </Link>
        로 계속해 주세요.
      </p>
    </main>
  );
}
