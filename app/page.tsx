import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={300}
          height={61}
          priority
        />
        <ul className="font-mono  list-none text-center sm:text-left text-2xl">
          <li>
            <Link href={"geo"}>
              <p className="hover:text-black">GeoLocation, weather forecast</p>
            </Link>
          </li>
          <br />
          <li>
            <Link href={"profiles"}>
              <p className="hover:text-black">Profiles</p>
            </Link>
          </li>
          <br />
          <li>
            <Link href={"wikirocket"}>
              <p className="hover:text-black">WikiRocket</p>
            </Link>
          </li>
          <br />
        </ul>
      </main>
    </div>
  );
}
