export default function PossibleMatchesSection() {
  const hasMatches = true;

  return (
    <div className="bg-white p-10 rounded">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4 text-amber-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
          />
        </svg>
        <span className="font-semibold ml-1">Possible Matches</span>
      </div>

      {!hasMatches ? (
        <div className="mt-4 border-2 h-24 rounded flex items-center justify-center">
          <span className="text-gray-400">No matches found</span>
        </div>
      ) : (
        <div>
          <p className="text-sm text-gray-500 mt-4">
            Be sure to close the patient chart in Epic{" "}
            <span className="text-red-700 font-semibold">before</span> clicking
            &quot;Schedule&quot; to avoid locking the patient record.
          </p>
          <div className="mt-4 flex gap-4">
            <div className=" bg-neutral-100 border-2 rounded p-4">
              <div className="p-2">
                <span className="font-semibold">
                  Patient&apos;s Entered Information
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-7">
                <div className="p-2">
                  <div className="text-xs text-gray-500">Last Name</div>
                  <div className="mt-1">Halpert</div>
                </div>
                <div className="p-2 bg-orange-200 rounded-lg">
                  <div className="text-xs text-gray-500">First Name</div>
                  <div className="mt-1 font-semibold">Jim</div>
                </div>
                <div className="p-2">
                  <div className="text-xs text-gray-500">Sex</div>
                  <div className="mt-1">Male</div>
                </div>
                <div className="p-2">
                  <div className="text-xs text-gray-500">DOB</div>
                  <div className="mt-1">01/01/1985</div>
                </div>

                <div className="p-2 col-span-2  bg-orange-200 rounded-lg">
                  <div className="text-xs text-gray-500">Address</div>
                  <div className="mt-1">123 Dunder Mifflin Ave</div>
                  <div>New York, NY 01002</div>
                </div>

                <div className="p-2">
                  <div className="text-xs text-gray-500">Home Phone</div>
                  <div className="mt-1">333-333-3333</div>
                </div>

                <div className="p-2">
                  <div className="text-xs text-gray-500">Mobile Phone</div>
                  <div className="mt-1">777-777-7777</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded border-2 p-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2 col-span-2">
                  <div className="text-xs text-gray-500">MRN</div>
                  <div className="mt-1">E1302364531</div>
                </div>
                <div className="p-2">
                  <div className="text-xs text-gray-500">Last Name</div>
                  <div className="mt-1">Halpert</div>
                </div>
                <div className="p-2 bg-orange-200 rounded-lg">
                  <div className="text-xs text-gray-500">First Name</div>
                  <div className="mt-1 font-semibold">Jimothy</div>
                </div>
                <div className="p-2">
                  <div className="text-xs text-gray-500">Sex</div>
                  <div className="mt-1">Male</div>
                </div>
                <div className="p-2">
                  <div className="text-xs text-gray-500">DOB</div>
                  <div className="mt-1">01/01/1985</div>
                </div>

                <div className="p-2 col-span-2  bg-orange-200 rounded-lg">
                  <div className="text-xs text-gray-500">Address</div>
                  <div className="mt-1">432 Dunder Mifflin St</div>
                  <div>New York, NY 01008</div>
                </div>

                <div className="p-2">
                  <div className="text-xs text-gray-500">Home Phone</div>
                  <div className="mt-1">333-333-3333</div>
                </div>

                <div className="p-2">
                  <div className="text-xs text-gray-500">Mobile Phone</div>
                  <div className="mt-1">777-777-7777</div>
                </div>

                <div className="p-2 col-span-2">
                  <button className="bg-amber-500 text-white text-xs px-4 py-2 rounded-full w-full font-semibold">
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
