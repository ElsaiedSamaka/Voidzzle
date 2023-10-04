import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveMenuLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100 p-2 rounded block text-sm ${
        active ? "text-black font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

const DashboardLayout = ({ children }) => {
  return (
    <section className="dashboard-layout flex bg-pink-600">
      <aside className="flex-col flex-[2]">
        <nav>
          <ul className="grid gap-3">
            <li>
              <ActiveMenuLink href="/dashboard/analytics">
                Analytics
              </ActiveMenuLink>
            </li>
            <li>
              <ActiveMenuLink href="/dashboard/account">Account</ActiveMenuLink>
            </li>
            <li>
              <ActiveMenuLink href="/dashboard/settings">
                Settings
              </ActiveMenuLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bg-gray-100 p-4 rounded">{children}</div>
    </section>
  );
};

export default DashboardLayout;
