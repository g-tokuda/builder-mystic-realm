import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "COLLECTIONS", href: "/collections" },
    { name: "LOOKBOOK", href: "/lookbook" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-techno">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-mono-techno text-xl md:text-2xl font-black tracking-tighter hover:text-muted-foreground transition-colors"
          >
            APEX
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="font-mono-techno text-xs tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Cart & Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="font-mono-techno text-xs tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors">
              CART (0)
            </button>
            <button className="w-6 h-6 flex flex-col justify-center space-y-1 group">
              <div className="w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors"></div>
              <div className="w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center space-y-1 group"
          >
            <div
              className={`w-full h-px bg-foreground transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></div>
            <div
              className={`w-full h-px bg-foreground transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-full h-px bg-foreground transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-64 border-t border-border" : "max-h-0"
          }`}
        >
          <div className="py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block font-mono-techno text-sm tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <button className="font-mono-techno text-sm tracking-[0.2em] uppercase hover:text-muted-foreground transition-colors">
                CART (0)
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
