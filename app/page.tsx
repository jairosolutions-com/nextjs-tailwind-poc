export default function Home() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="bg-white w-[500px] p-16 shadow rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-600">
          Welcome to GoHealth
        </h1>
        <p className="text-sm font-semibold mt-2 text-gray-600">
          This is a test for UI implementation for GoReg2.0 using{" "}
          <span className="text-bold text-sky-600">tailwindcss</span> and{" "}
          <span className="text-bold text-black">NEXT JS</span>
        </p>
        <a
          href="/patients"
          aria-label="navigate to patients page"
          className="inline-flex group bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold px-4 py-2 rounded-full mt-8 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-300"
        >
          Go to patients page
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 ml-2 group-hover:ml-8 transition-all"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
