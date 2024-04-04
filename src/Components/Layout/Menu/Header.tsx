import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { SlAnchor } from "react-icons/sl";
import { useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { ReactNode } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentUrl, setCurrentUrl] = useState<string>(
    window.location.pathname
  );

  useEffect(() => {
    const handleResize = () => setIsTablet(window.innerWidth < 768);
    const handleRouteChange = () => setCurrentUrl(window.location.pathname);

    window.addEventListener("resize", handleResize);
    window.addEventListener("popstate", handleRouteChange);

    handleResize();
    handleRouteChange();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="w-full bg-slate-500">
      <div className="mx-28 max-tablet:mx-12 px-4 tablet:px-6 ">
        <div
          className={`flex justify-between items-center py-4 tablet:justify-start `}
        >
          <div>
            <a href="/Menu">
              <div className="flex items-center flex-row gap-2 hover:opacity-50 duration-300">
                <div>
                  <p className="font-body text-xl select-none">Recipe</p>
                </div>
                <div>
                  <SlAnchor />
                </div>
              </div>
            </a>
          </div>
          <div className="w-full flex justify-center gap-10 select-none max-tablet:hidden">
            <div className="hover:opacity-70 duration-300">
              <NavLink url="/Menu" currentUrl={currentUrl}>
                menu
              </NavLink>
            </div>
            <div className="hover:opacity-70 duration-300">
              <NavLink url="/Recipe" currentUrl={currentUrl}>
                recipe
              </NavLink>
            </div>
            <div className="hover:opacity-70 duration-300">
              <NavLink url="/GlobalRecipe" currentUrl={currentUrl}>
                global recipe
              </NavLink>
            </div>
          </div>
          {isTablet ? (
            <div className="-mr-2 -my-2 tablet:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className={`text-white hover:text-gray focus:outline-none ${styles.menuToggle}`}
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close Menu" : "Open Menu"}
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          ) : (
            <div className="flex items-center ml-auto p-2">
              <button
                className={`text-white hover:text-gray block px-3 py-2 ${styles.menuLink}`}
              >
                <a href="/Profile">
                  <FaUserCircle className={styles.icon} />
                </a>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="block tablet:hidden">
        {isOpen && (
          <div className="absolute px-2 pt-2 pb-3 space-y-1 phone:px-3 bg-slate-500 w-full">
            <div className="flex flex-wrap flex-col items-center justify-center gap-y-4">
              <NavLink url="/Menu" currentUrl={currentUrl}>
                menu
              </NavLink>
              <NavLink url="/Recipe" currentUrl={currentUrl}>
                recipe
              </NavLink>
              <NavLink url="/GlobalRecipe" currentUrl={currentUrl}>
                global recipe
              </NavLink>
              <a href="/Profile">profile</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

interface NavLinkProps {
  url: string;
  currentUrl: string;
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ url, currentUrl, children }) => {
  const isActive = url === currentUrl;
  const className = isActive ? "border-b-2 border-black pb-1" : "";

  return (
    <a href={url} className={className}>
      <button>{children}</button>
    </a>
  );
};
