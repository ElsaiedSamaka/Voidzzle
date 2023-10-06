import Link from "next/link";
import { usePathname } from "next/navigation";
const Anchor = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;

  return (
    <Link
      href={href}
      className={`hover:bg-gray-100  rounded-2xl block text-sm ${
        active ? "text-black  font-semibold" : "text-gray-500"
      }`}
    >
      {children}
    </Link>
  );
};

export default Anchor;
