import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link href={"/"}>
      <div className="flex gap-3 opacity-75 hover:opacity-100 hover:bg-amber-400 text-4xl text-gray-800 max-w-fit border-1 px-5 py-2">
        <FaHome className="border-red-100" />
        <p className="hidden sm:block ">Home</p>
      </div>
    </Link>
  );
}
