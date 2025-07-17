import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "SHOP",
      links: [
        { name: "All Collections", href: "/collections" },
        { name: "Tech Wear", href: "/collections/tech-wear" },
        { name: "Minimal Basics", href: "/collections/minimal-basics" },
        { name: "Statement Pieces", href: "/collections/statement-pieces" },
        { name: "Accessories", href: "/collections/accessories" },
      ],
    },
    {
      title: "BRAND",
      links: [
        { name: "About", href: "/about" },
        { name: "Lookbook", href: "/lookbook" },
        { name: "Sustainability", href: "/sustainability" },
        { name: "Size Guide", href: "/size-guide" },
        { name: "Care Instructions", href: "/care" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
        { name: "FAQ", href: "/faq" },
        { name: "Track Order", href: "/track" },
      ],
    },
  ];

  const socialLinks = [
    { name: "INSTAGRAM", href: "https://instagram.com" },
    { name: "TWITTER", href: "https://twitter.com" },
    { name: "DISCORD", href: "https://discord.com" },
    { name: "YOUTUBE", href: "https://youtube.com" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-techno py-16 md:py-24">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link
              to="/"
              className="font-mono-techno text-2xl font-black tracking-tighter"
            >
              APEX
            </Link>
            <p className="text-background/70 leading-relaxed">
              Future fashion for urban rebels. Where technology meets style in
              the digital age.
            </p>
            <div className="space-y-2">
              <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-background/50">
                Connect
              </div>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-techno text-xs tracking-[0.2em] uppercase hover:text-background/70 transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="font-mono-techno text-sm tracking-[0.2em] uppercase text-background/50">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 pt-12 mb-12">
          <div className="max-w-2xl">
            <div className="space-y-4 mb-6">
              <h3 className="font-mono-techno text-lg tracking-[0.2em] uppercase">
                UNDERGROUND ACCESS
              </h3>
              <p className="text-background/70">
                Get first access to drops, exclusive content, and urban culture
                insights.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="YOUR.EMAIL@DOMAIN.COM"
                className="flex-1 bg-transparent border border-background/30 px-4 py-3 text-sm font-mono-techno tracking-wide uppercase placeholder:text-background/50 focus:outline-none focus:border-background focus:ring-1 focus:ring-background"
              />
              <button className="bg-background text-foreground hover:bg-background/90 px-6 py-3 text-sm font-mono-techno tracking-wide uppercase transition-all duration-200">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/50 text-sm">
              © {currentYear} APEX. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-background/70 hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-background/70 hover:text-background transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-background/70 hover:text-background transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
