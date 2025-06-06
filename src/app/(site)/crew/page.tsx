import Link from "next/link";

export default function Crew() {
  return (
    <main className="mx-auto max-w-[1200px]">
      <div className=" my-14 text-center">
        <h1 className="font-bold text-3xl mb-5">소모임</h1>
        <p>gd</p>
      </div>
      <div className="grid grid-cols-4">
        <CrewItem
          title="독서 소모임"
          href="/"
          createdAt="2025년 3월 14일"
          bg="https://ckgamelab.com/wp-content/uploads/2025/02/img-scaled.jpg"
        />
        <CrewItem
          title="런닝 크루"
          href="/"
          createdAt="2025년 3월 13일"
          bg="https://ckgamelab.com/wp-content/uploads/2025/02/12.jpg"
        />
      </div>
    </main>
  );
}

function CrewItem({
  title,
  href,
  createdAt,
  bg,
}: {
  title: string;
  href: string;
  createdAt: string;
  bg: string;
}) {
  return (
    <Link href={href} className="group/crew cursor-pointer text-white">
      <div
        className=" w-full h-52 relative overflow-hidden"
        style={{
          background: `url(${bg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="z-10 p-5 absolute bottom-[-45px] group-hover/crew:bottom-0 transition-all">
          <p className="font-semibold text-lg scale-0 group-hover/crew:scale-80 transition-transform origin-bottom-left">
            소모임
          </p>
          <h4 className="font-bold text-2xl">{title}</h4>
          <p className="text-sm mt-5">{createdAt}</p>
        </div>
        <div className="z-0 bg-black absolute left-0 top-0 w-full h-full opacity-30 group-hover/crew:opacity-60 transition-opacity"></div>
      </div>
    </Link>
  );
}
