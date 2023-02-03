import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <Logo />

      <div>
        <Link href="/" className="btn-primary px-5 py-3">
          Signup to the university of code
        </Link>
      </div>
    </header>
  );
}

export default Header;
