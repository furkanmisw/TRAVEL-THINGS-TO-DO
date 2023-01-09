import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      <Link href={"/"}>
        <img src="/travel.png" alt="travel" />
      </Link>
    </div>
  );
}

export default Header;
