import Link from "next/link";

export default function Patients() {
  const patients = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className="p-8">
      <div className="flex items-baseline justify-between">
        <h1 className="text-3xl">Patients</h1>
        <button className="flex items-center px-8 py-2 rounded-full text-xs text-white bg-amber-500 font-semibold">
          <span>+ Add New Patient</span>
        </button>
      </div>

      <div className="mt-4 rounded-lg overflow-hidden">
        <div className="w-full">
          <div className="bg-gray-800 text-white text-left font-semibold tracking-wide text-sm">
            <div className="grid grid-cols-6 lg:grid-cols-8">
              <div className="p-3 flex items-center justify-between">
                Visit Time
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
              <div className="p-3 flex items-center justify-between lg:col-span-3">
                Patient Name
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                Reason for Visit
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                Insurance
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                Status
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
              <div className="p-3 flex items-center justify-between">
                Last Updated
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div>
            {patients.map((patient) => (
              <Link
                href={`/patients/${patient}`}
                key={patient}
                className="row grid grid-cols-6 lg:grid-cols-8 text-sm odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <div className="p-3">10:00 AM</div>
                <div className="p-3 lg:col-span-3">Doe, John</div>
                <div className="p-3">Other</div>
                <div className="p-3">Insured: Not Valid</div>
                <div className="p-3">
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                    PT Complete
                  </span>
                </div>
                <div className="p-3">1/6/2024, 11:09:10 AM</div>
              </Link>
            ))}
          </div>
          <div className="w-full bg-white p-3 text-xs flex items-center justify-between">
            <div>
              <span>Show</span>
              <select className="form-select mx-2 text-xs pr-6 bg-gray-200 border-0 rounded-lg">
                <option value="10">10</option>
              </select>
              <span>registrations</span>
            </div>
            <div className="flex">
              <button className="text-gray-500">Previous</button>
              <div className="mx-2">
                <button className="bg-sky-500 px-2 py-1 p mx-1 rounded-md text-white">
                  1
                </button>
                <button className="bg-gray-300 px-2 py-1 p mx-1 rounded-md text-gray-600">
                  2
                </button>
                <button className="bg-gray-300 px-2 py-1 p mx-1 rounded-md text-gray-600">
                  3
                </button>
              </div>
              <button className="text-gray-500">Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
