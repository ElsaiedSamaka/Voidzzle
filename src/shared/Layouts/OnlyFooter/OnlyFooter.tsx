import Image from "next/image";
import Link from "next/link";

const OnlyFooterLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-auto max-w-2xl px-4 pt-8 pb-16">
      <div className="flex-grow">
        <main className="my-0 py-16">{children}</main>
      </div>
      <footer className="flex items-center justify-between">
        <Link href="/" className="flex gap-4 items-center">
          <Image
            width={36}
            height={36}
            src="/favicon.ico"
            className="w-8 md:w-9"
            alt="logo"
          />{" "}
          <span>Demo site</span>
        </Link>

        <div>
          <p>&copy; {new Date().getFullYear().toString()} by Ibas</p>
        </div>
      </footer>
    </div>
  );
};

export default OnlyFooterLayout;
