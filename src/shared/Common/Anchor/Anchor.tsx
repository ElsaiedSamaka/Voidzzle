import classNames from "classnames";
import { useThemeContext } from "core/context/ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Anchor = ({ children, href }) => {
  const pathname = usePathname();
  const { theme } = useThemeContext();
  const active = href === pathname;
  const { mode } = theme;

  return (
    <Link
      href={href}
      className={classNames(
        "rounded-l-none hover:border-l-4 outline-none transition-all duration-100 ease-in-out rounded-2xl block text-sm",
        {
          "border-l-4  transition-all duration-100 ease-in-out  font-bold":
            active,
        },
        {
          "border-l-light-primary": mode === "light",
        },
        {
          "border-l-dark-primary": mode === "dark",
        }
      )}
    >
      {children}
    </Link>
  );
};

export default Anchor;
