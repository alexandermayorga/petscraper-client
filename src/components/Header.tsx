import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const logo = "/favicon-32x32.png";
  const router = useRouter();

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const addActiveIfIsPage = (pageName: string) => {
    return router.pathname == `${pageName}` ? "active" : "";
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image
            src={logo} // Route of the image file
            height={32} // Desired size with correct aspect ratio
            width={32} // Desired size with correct aspect ratio
            alt="Logo | The Rescue Park"
          />{" "}
          The Rescue Park
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item`}>
              <Link
                href="/"
                className={`nav-link ${addActiveIfIsPage("/")}`}
              >
                Home{" "}
              </Link>
            </li>
            <li className={`nav-item}`}>
              <Link
                href="/shelters"
                className={`nav-link ${addActiveIfIsPage("/shelters")}`}
              >
                Shelters{" "}
              </Link>
            </li>
            <li className={`nav-item active`}>
              <Link
                href="/about"
                className={`nav-link ${addActiveIfIsPage("/about")}`}
              >
                About{" "}
              </Link>
            </li>
            <li className={`nav-item active`}>
              <Link
                href="/documentation"
                className={`nav-link ${addActiveIfIsPage("/documentation")}`}
              >
                API{" "}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
