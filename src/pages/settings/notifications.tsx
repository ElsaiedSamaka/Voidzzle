import { SettingsLayout, RootLayout } from 'shared';
// Packages
import Head from 'next/head';
// Hooks & Services
import { useTranslation } from 'core/context/TranslationContext';
const NotificationsSettings = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('notifications.title')}</title>
        <meta
          name="description"
          content="Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
        />
      </Head>
      <div className="mx-4 min-h-screen sm:mx-8 xl:mx-auto">
        <h1 className="border-b border-zinc-500/50 py-6 text-4xl font-semibold">
          {t('settings.name')}
        </h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="col-span-10 overflow-hidden rounded-xl bg-zinc-500/10 px-8 shadow">
            <div className="border-b border-zinc-500/50 pt-4 pb-8">
              <h1 className="py-2 text-2xl font-semibold">
                {t('notifications.name')}
              </h1>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="grid py-6 sm:grid-cols-2">
              <div className="">
                <h2 className="text-lg font-semibold leading-4 ">Comments</h2>
                <p className="font- ">
                  Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
                  neque.
                </p>
              </div>
              <div className="mt-4 flex items-center sm:justify-end">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="push"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="push"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Push
                    </span>
                  </label>
                  <label
                    htmlFor="email"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="email"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email
                    </span>
                  </label>
                  <label
                    htmlFor="sms"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="sms"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      SMS
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid border-b border-zinc-500/50 py-6 sm:grid-cols-2">
              <div className="">
                <h2 className="text-lg font-semibold leading-4 ">Reminders</h2>
                <p className="font- ">
                  Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
                  neque.
                </p>
              </div>
              <div className="mt-4 flex items-center sm:justify-end">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="push"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="push"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Push
                    </span>
                  </label>
                  <label
                    htmlFor="email"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="email"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email
                    </span>
                  </label>
                  <label
                    htmlFor="sms"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="sms"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      SMS
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="grid py-6 sm:grid-cols-2">
              <div className="">
                <h2 className="text-lg font-semibold leading-4 ">Updates</h2>
                <p className="font- ">
                  Lorem ipsum dolor, Alias eligendi laboriosam magni reiciendis
                  neque.
                </p>
              </div>
              <div className="mt-4 flex items-center sm:justify-end">
                <div className="flex flex-col gap-3">
                  <label
                    htmlFor="push"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="push"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Push
                    </span>
                  </label>
                  <label
                    htmlFor="email"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="email"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      Email
                    </span>
                  </label>
                  <label
                    htmlFor="sms"
                    className="relative inline-flex cursor-pointer items-center"
                  >
                    <input
                      type="checkbox"
                      defaultValue=""
                      id="sms"
                      className="peer sr-only"
                    />
                    <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800" />
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                      SMS
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
NotificationsSettings.getLayout = (page) => {
  return (
    <RootLayout>
      <SettingsLayout>{page}</SettingsLayout>
    </RootLayout>
  );
};

export default NotificationsSettings;
