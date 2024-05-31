import Link from "next/link";
import Sidebar from "./sections/Sidebar";
import PatientDetailsSection from "./sections/PatientDetailsSection";
import PossibleMatchesSection from "./sections/PossibleMatchesSection";

export default function Patient({ params }: { params: { id: string } }) {
  return (
    <div>
      <Sidebar />
      <div className="p-6 ml-[250px]">
        <div className="flex items-center justify-center px-4 py-4 mb-6 bg-orange-50 border border-orange-200 shadow rounded-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 fill-current text-orange-400"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="ml-4 text-sm text-gray-500">
            Notice: We&apos;re currently experiencing a disruption with the
            real-time insurance eligibility check feature.
          </span>
        </div>
        <div>
          <div className="flex items-center">
            <h1 className="font-bold text-xl">New Patient</h1>
            <span className="ml-4 text-xs px-2 py-1 bg-orange-100 text-orange-500 rounded-lg">
              Incomplete
            </span>
          </div>
          <span className="mt-1 block text-sm">
            Bristol - 4/9/2024, 12:15 PM EDT
          </span>
        </div>

        <section className="mt-4">
          <PatientDetailsSection />
        </section>

        <section id="possibleMatches" className="mt-4">
          <PossibleMatchesSection />
        </section>
      </div>
    </div>
  );
}
