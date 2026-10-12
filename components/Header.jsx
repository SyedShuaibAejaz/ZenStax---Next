"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./header-dropdown.module.css";

// Add new templates to the "Products" children list and they appear in the dropdown.
const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  {
    label: "Products",
    children: [
      {
        label: "ZenStax CRM",
        href: "/crm",
        description: "Pipelines, contacts and reports",
      },
    ],
  },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function closeMenu() {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  }

  useEffect(() => {
    if (!isProductsOpen) return undefined;

    function handlePointerDown(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isProductsOpen]);

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
          {navigation.map((item) => {
            if (!item.children) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              );
            }

            const childActive = item.children.some((child) => isActive(child.href));

            return (
              <div
                key={item.label}
                ref={dropdownRef}
                className={`${styles.dropdown} ${isProductsOpen ? styles.open : ""}`}
              >
                <button
                  type="button"
                  className={`${styles.trigger} ${childActive ? styles.active : ""}`}
                  aria-haspopup="menu"
                  aria-expanded={isProductsOpen}
                  onClick={() => setIsProductsOpen((current) => !current)}
                >
                  {item.label}
                  <span className={styles.caret} aria-hidden="true" />
                </button>

                <div className={styles.menu} role="menu">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      role="menuitem"
                      className={`${styles.menuLink} ${
                        isActive(child.href) ? styles.menuLinkActive : ""
                      }`}
                      onClick={closeMenu}
                    >
                      <strong>{child.label}</strong>
                      {child.description && <span>{child.description}</span>}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}

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
