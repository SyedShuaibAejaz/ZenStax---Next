"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-container">
        <Link
          href="/"
          className="brand"
          aria-label="ZenStax home"
          onClick={closeMenu}
        >
          <Image
            src="/logo/zenstax-logo.png"
            alt="ZenStax"
            width={46}
            height={46}
            priority
          />

          <span className="brand-name">
            Zen<span>Stax</span>
          </span>
        </Link>

        <nav
          id="mobile-navigation"
          className={`main-nav ${isMenuOpen ? "menu-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Discuss a Project
            <span aria-hidden="true">→</span>
          </Link>
        </nav>

        <button
          type="button"
          className={`menu-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}