import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container text-center">
        <div className="mb-2">
          Made with
          <span role="img" aria-label="heart emoji" className="mx-2">
            💙
          </span>{" "}
          by{" "}
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alex-mayorga/"
            className="text-light"
            style={{ textDecoration: "underline" }}
            target="_blank"
          >
            Alex Mayorga
          </a>{" "}
        </div>
        <div className="fs-4">
          <Link href='https://www.linkedin.com/in/alex-mayorga/' target='_blank'><i className="bi bi-linkedin me-3 text-light"></i></Link>
          <Link href='https://github.com/alexandermayorga' target='_blank'><i className="bi bi-github me-3 text-light"></i></Link>
          {/* <i className="bi bi-twitter"></i> */}
        </div>
      </div>
    </footer>
  );
}
