export default function PatientDetailsSection() {
  return (
    <div className="bg-white p-10 rounded">
      <div className="flex items-center justify-between">
        <div>
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
                d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
              />
            </svg>
            <span className="font-semibold ml-1">Patient Details</span>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            Items marked <span className="font-semibold text-red-700">red</span>{" "}
            have not been sent to the EMR. Items marked in{" "}
            <span className="font-semibold text-green-700">green</span> differ
            from that in the EMR.
          </p>
        </div>
        <div>
          <button className="text-xs border border-amber-500 text-amber-500 rounded-full px-4 py-2 hover:bg-amber-500 hover:text-white">
            Save Changes
          </button>
        </div>
      </div>

      <div className="mt-4 flex gap-20 relative">
        <div className="w-3/5">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
              />
              <label
                htmlFor="firstName"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                First Name
              </label>
            </div>
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              />
              <label
                htmlFor="lastName"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                Last Name
              </label>
            </div>

            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="sex"
                id="sex"
                placeholder="Sex"
              />
              <label
                htmlFor="sex"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                Sex
              </label>
            </div>
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="dob"
                id="dob"
                placeholder="DOB"
              />
              <label
                htmlFor="dob"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                DOB
              </label>
            </div>
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone"
              />
              <label
                htmlFor="phone"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                Phone
              </label>
            </div>
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                Email
              </label>
            </div>
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="address"
                id="address"
                placeholder="Address"
              />
              <label
                htmlFor="address"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                Address
              </label>
            </div>
            <div className="relative text-gray-600">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="address2"
                id="address2"
                placeholder="Apt, Suite, Unit, etc."
              />
              <label
                htmlFor="address2"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                Apt, Suite, Unit, etc.
              </label>
            </div>

            <div className="flex items-center gap-4 col-span-2">
              <div className="relative text-gray-600 w-2/5">
                <input
                  className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                />
                <label
                  htmlFor="city"
                  className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
                >
                  City
                </label>
              </div>
              <div className="relative text-gray-600 w-1/5">
                <select
                  className="form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                  name="state"
                  id="state"
                >
                  <option value="CA">CA</option>
                  <option value="NY">NY</option>
                </select>
                <label
                  htmlFor="state"
                  className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
                >
                  State
                </label>
              </div>
              <div className="relative text-gray-600 flex-auto">
                <input
                  className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                  type="text"
                  name="zip"
                  id="zip"
                  placeholder="Zipcode"
                />
                <label
                  htmlFor="zip"
                  className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
                >
                  Zipcode
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/5">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative text-gray-600">
              <select
                className="form-input text-gray-400 w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                name="reasonForVisit"
                id="reasonForVisit"
              >
                <option value="">-- Select --</option>
              </select>
              <label
                htmlFor="reasonForVisit"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2"
              >
                Reason for Visit
              </label>
            </div>
            <div className="relative text-gray-600">
              <select
                className="form-input text-gray-400 w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                name="patientType"
                id="patientType"
              >
                <option value="">-- Select --</option>
              </select>
              <label
                htmlFor="patientType"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2"
              >
                Patient Type
              </label>
            </div>
            <div className="relative text-gray-600 col-span-2">
              <input
                className="peer placeholder-transparent form-input w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                type="text"
                name="pcp"
                id="pcp"
                placeholder="PCP"
              />
              <label
                htmlFor="pcp"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2
                peer-placeholder-shown:left-0
                peer-placeholder-shown:top-2.5
                peer-placeholder-shown:text-sm
                peer-focus:text-xs
                peer-focus:top-0
                transition-all
                select-none
                pointer-events-none"
              >
                PCP
              </label>
            </div>
            <div className="relative text-gray-600 col-span-2">
              <select
                className="form-input text-gray-400 w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                name="hearAboutUs"
                id="hearAboutUs"
              >
                <option value="">-- Select --</option>
              </select>
              <label
                htmlFor="hearAboutUs"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2"
              >
                Hear About Us
              </label>
            </div>
            <div className="relative text-gray-600">
              <select
                className="form-input text-gray-400 w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                name="race"
                id="race"
              >
                <option value="">-- Select --</option>
              </select>
              <label
                htmlFor="race"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2"
              >
                Race
              </label>
            </div>
            <div className="relative text-gray-600">
              <select
                className="form-input text-gray-400 w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                name="ethnicity"
                id="ethnicity"
              >
                <option value="">-- Select --</option>
              </select>
              <label
                htmlFor="ethnicity"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2"
              >
                Ethnicity
              </label>
            </div>
            <div className="relative text-gray-600 col-span-2">
              <select
                className="form-input text-gray-400 w-full text-sm border-gray-200 rounded-md pt-5 px-2 focus:ring-0 focus:border-gray-400"
                name="language"
                id="language"
              >
                <option value="">-- Select --</option>
              </select>
              <label
                htmlFor="language"
                className="absolute text-xs text-gray-500 left-0 top-0 mt-1 ml-2"
              >
                Language
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
