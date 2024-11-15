import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative bg-[url('/hero.avif')] bg-no-repeat bg-cover h-[400px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold">Historic Festival 42</h1>
          <p className="mt-2 text-lg">August 30 - September 2, 2024</p>
          <p className="mt-1">Lime Rock Park, Lakeville, CT</p>
          <button className="mt-4 px-6 py-3 bg-red-600 rounded hover:bg-red-700">
            Buy Ticket Now
          </button>
        </div>
      </div>
    );
  }
  