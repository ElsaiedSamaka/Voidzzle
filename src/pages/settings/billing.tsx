// Layouts
import { RootLayout, SettingsLayout } from 'shared';
// Packages
import Head from 'next/head';
import Image from 'next/image';

// Hooks & Services
import { useTranslation } from 'core/context/TranslationContext';

const BillingSettings = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('billing.title')}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <div className="mx-4 sm:mx-8 xl:mx-auto">
        <h1 className="border-b border-zinc-500/50 py-6 text-4xl font-semibold">
          {t('settings.name')}
        </h1>
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
          <div className="col-span-10 overflow-y-scroll rounded-xl bg-zinc-500/10 sm:px-8 sm:shadow">
            <div className="pt-4">
              <h1 className="py-2 text-2xl font-semibold">
                {t('billing.name')}
              </h1>
              <p className="font- ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <hr className="mt-4 mb-8 border border-zinc-500/50" />
            <div className="mb-10 grid gap-y-8 lg:grid-cols-2 lg:gap-y-0">
              <div className="space-y-8">
                <div>
                  <div className="flex">
                    <p className="font-medium mb-1">Billing Period</p>
                    <button className="ml-auto inline-flex text-sm font-semibold text-blue-600 underline decoration-2">
                      Change
                    </button>
                  </div>
                  <div className="flex items-center rounded-md border border-gray-100/10 bg-white/5 py-3 shadow">
                    <p className="ml-4 w-56">
                      <strong className="block text-lg font-medium">
                        MONTHLY
                      </strong>
                      <span className="text-xs ">
                        {' '}
                        Next Renewal: 4 Jan 2022{' '}
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
                  <div className="flex items-center rounded-md border border-gray-100/10 bg-white/5 py-3 shadow">
                    <Image
                      alt="temp"
                      title="Visa"
                      className="h-10 object-contain pl-4"
                      src=""
                      width={10}
                      height={10}
                    />
                    <p className="ml-4 w-56">
                      <strong className="block text-lg font-medium">
                        **** **** **** 453{' '}
                      </strong>
                      <strong className="block text-lg font-medium">
                        ALBERT K. DANIEL{' '}
                      </strong>
                      <span className="text-xs "> Expires on: Dec 2024 </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid gap-y-6 gap-x-3 sm:grid-cols-2 lg:px-8">
                <label className="block" htmlFor="name">
                  <p className="text-sm">Name</p>
                  <input
                    className="w-full rounded-md border border-zinc-500/10 bg-white/40 py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                    type="text"
                    defaultValue="Shakir Ali"
                  />
                </label>
                <label className="block" htmlFor="name">
                  <p className="text-sm">Email Address</p>
                  <input
                    className="w-full rounded-md border border-zinc-500/10 bg-white/40 py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                    type="text"
                    defaultValue="shakir.ali@corpora.de"
                  />
                </label>
                <label className="block sm:col-span-2" htmlFor="name">
                  <p className="text-sm">Billing Address</p>
                  <input
                    className="w-full rounded-md border border-zinc-500/10 bg-white/40 py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                    type="text"
                    defaultValue="82844 Boyle Extension Suite 541 - Covington, HI / 28013"
                  />
                </label>
                <label className="block" htmlFor="name">
                  <p className="text-sm">VAT #</p>
                  <input
                    className="w-full rounded-md border border-zinc-500/10 bg-white/40 py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                    type="text"
                    defaultValue={6346322}
                  />
                </label>
                <label className="block" htmlFor="name">
                  <p className="text-sm">Country</p>
                  <input
                    className="w-full rounded-md border border-zinc-500/10 bg-white/40 py-2 px-2 outline-none ring-blue-600 focus:ring-1"
                    type="text"
                    defaultValue="Germany"
                  />
                </label>
              </div>
            </div>
            <div className="amx-auto mb-10 overflow-hidden rounded-lg border bg-white/5 border-gray-100/10">
              <p className="mb-6 bg-zinc-100/10 py-1 text-center text-lg font-medium">
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
                    <td className="border-b border-gray-100/10 py-2 text-center text-sm">
                      23 Nov 2021
                    </td>
                    <td className="border-b border-gray-100/10 py-2 text-center text-sm">
                      X-543242
                    </td>
                    <td className="border-b border-gray-100/10 py-2 text-center text-sm">
                      $99.00
                    </td>
                    <td className="border-b border-gray-100/10 py-2 text-center text-sm">
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
    </>
  );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
BillingSettings.getLayout = (page: any) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};

export default BillingSettings;
