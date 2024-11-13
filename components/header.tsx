import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-red-600 text-2xl font-bold">Motorsport Events</h1>
      <nav className="flex gap-4">
        <Link href="/signin" className="px-4 py-2 text-gray-700 hover:text-black">
          Sign In
        </Link>
        <Link
          href="/signup"
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Sign Up
        </Link>
      </nav>
    </header>
  );
}
