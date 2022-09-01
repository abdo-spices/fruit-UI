import React from 'react';
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <>
      <nav className="navbar">
      <Image alt="logo" width={50} height={50} src="/fruitUI.png" />
        <div className="toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar-links">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/components">components</Link>
          </li>
          <li>
            <Link href="/layout">layout</Link>
          </li>
          <li>
            <Link href="/utilities">utilities</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header