import React from "react";
import { RootLayout, SettingsLayout } from "shared";

const BillingSettings = () => {
  return (
    <div className="mx-4  sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
        <div className="col-span-10 rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
          <div className="pt-4">
            <h1 className="py-2 text-2xl font-semibold">Billing settings</h1>
            {/* <p class="font- text-slate-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p> */}
          </div>
          <hr className="mt-4 mb-8" />
          <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
            <div className="space-y-8">
              <div>
                <div className="flex">
                  <p className="font-medium mb-1">Billing Period</p>
                  <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                    Change
                  </button>
                </div>
                <div className="flex items-center rounded-md border border-gray-100 bg-white py-3 shadow">
                  <p className="ml-4 w-56">
                    <strong className="block text-lg font-medium">
                      MONTHLY
                    </strong>
                    <span className="text-xs text-gray-400">
                      {" "}
                      Next Renewal: 4 Jan 2022{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex">
                  <p className="font-medium mb-1">Payment Method</p>
                  <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                    Change
                  </button>
                </div>
                <div className="flex items-center rounded-md border border-gray-100 bg-white py-3 shadow">
                  <img
                    className="h-10 object-contain pl-4"
                    src="/images/kt10d0A1TgzZpAoNM_YPX.png"
                  />
                  <p className="ml-4 w-56">
                    <strong className="block text-lg font-medium">
                      **** **** **** 453{" "}
                    </strong>
                    <strong className="block text-lg font-medium">
                      ALBERT K. DANIEL{" "}
                    </strong>
                    <span className="text-xs text-gray-400">
                      {" "}
                      Expires on: Dec 2024{" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
              <label className="block" htmlFor="name">
                <p className="text-sm">Name</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  defaultValue="Shakir Ali"
                />
              </label>
              <label className="block" htmlFor="name">
                <p className="text-sm">Email Address</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  defaultValue="shakir.ali@corpora.de"
                />
              </label>
              <label className="block sm:col-span-2" htmlFor="name">
                <p className="text-sm">Billing Address</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  defaultValue="82844 Boyle Extension Suite 541 - Covington, HI / 28013"
                />
              </label>
              <label className="block" htmlFor="name">
                <p className="text-sm">VAT #</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  defaultValue={6346322}
                />
              </label>
              <label className="block" htmlFor="name">
                <p className="text-sm">Country</p>
                <input
                  className="w-full rounded-md border bg-white py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                  type="text"
                  defaultValue="Germany"
                />
              </label>
            </div>
          </div>
          <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white">
            <p className="mb-6 bg-gray-100 py-1 text-center text-lg font-medium">
              Billing History
            </p>
            <table className="w-full">
              <thead>
                <tr>
                  <td className="text-center font-semibold">Date</td>
                  <td className="text-center font-semibold">Invoice #</td>
                  <td className="text-center font-semibold">Amount</td>
                  <td className="text-center font-semibold" />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="border-b py-2 text-center text-sm">
                    23 Nov 2021
                  </td>
                  <td className="border-b py-2 text-center text-sm">
                    X-543242
                  </td>
                  <td className="border-b py-2 text-center text-sm">$99.00</td>
                  <td className="border-b py-2 text-center text-sm">
                    <button className="text-sm text-blue-600 underline">
                      PDF
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

BillingSettings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};

export default BillingSettings;