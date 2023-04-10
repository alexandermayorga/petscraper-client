import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

export default function HeaderRBS() {
  const logo = "/apple-touch-icon.png";

  const router = useRouter();

  const isPageActive = (pageName: string) => {
    return router.pathname == pageName;
  };
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={logo} // Route of the image file
            height={32} // Desired size with correct aspect ratio
            width={32} // Desired size with correct aspect ratio
            alt="Logo | The Rescue Park"
          />{" "}
          The Rescue Park
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li className="nav-item">
              <Link href="/" passHref legacyBehavior>
                <Nav.Link active={isPageActive("/")}>Home</Nav.Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/shelters" passHref legacyBehavior>
                <Nav.Link active={isPageActive("/shelters")}>Shelters</Nav.Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" passHref legacyBehavior>
                <Nav.Link active={isPageActive("/about")}>About</Nav.Link>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/documentation" passHref legacyBehavior>
                <Nav.Link active={isPageActive("/documentation")}>API</Nav.Link>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
