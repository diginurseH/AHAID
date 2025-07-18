
import DinhaLogo from "./DinhaLogo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const menu = [
  { name: "Home", href: "#home" },
  { name: "Ecosystem", href: "/ecosystem", isRoute: true },
  { name: "Empowerment Streams", href: "/empowerment-streams", isRoute: true },
  { name: "Studio", href: "/studio", isRoute: true },
  { name: "Community", href: "/community", isRoute: true },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-30 bg-white/90 border-b border-green-50 shadow-sm backdrop-blur-lg">
      <div className="container max-w-7xl mx-auto flex items-center justify-between px-3 py-1 md:py-2">
        <Link to="/" className="flex items-center gap-3 group" aria-label="DINHA Home">
          <DinhaLogo size={38} />
          <span className="font-bold text-xl md:text-2xl text-green-900 tracking-tight group-hover:text-amber-700 transition">
            DINHA
          </span>
        </Link>
        <div className="flex-1 flex justify-end items-center">
          <ul className="hidden md:flex gap-1 xl:gap-3 items-center">
            {menu.map((item) => (
              <li key={item.name}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="px-3 py-2 rounded font-medium text-green-900/90 hover:text-amber-700 hover:bg-green-50 transition-colors text-base focus-visible:outline-amber-600 focus-visible:ring-2"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="px-3 py-2 rounded font-medium text-green-900/90 hover:text-amber-700 hover:bg-green-50 transition-colors text-base focus-visible:outline-amber-600 focus-visible:ring-2"
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <Button
            asChild
            size="sm"
            className="ml-3 bg-amber-700 hover:bg-amber-800 text-white hidden md:inline-flex"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
