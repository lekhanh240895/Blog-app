import Image from "next/image";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <Link href="/">
        <Image
          src="https://www.sanity.io/static/images/logo_rounded_square.png"
          width={50}
          height={50}
          alt="Logo"
          priority
          className="rounded-full object-cover"
        />
      </Link>

      <h1>Review App Studio</h1>
    </div>
  );
}

export default Logo;
