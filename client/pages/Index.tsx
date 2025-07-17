import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-techno opacity-30"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-foreground shape-diamond"></div>
      <div className="absolute top-40 right-20 w-6 h-6 border-2 border-foreground"></div>
      <div className="absolute bottom-40 left-1/4 w-8 h-8 bg-foreground transform rotate-45"></div>
      <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-foreground rounded-full"></div>

      {/* Main Content */}
      <div className="container-techno text-center z-10">
        <div className="space-y-6 md:space-y-8">
          {/* Overline */}
          <div className="font-mono-techno text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground">
            Next Generation Apparel
          </div>

          {/* Main Headline */}
          <h1 className="text-techno-xl leading-none">
            <span className="block">FUTURE</span>
            <span className="block">FASHION</span>
            <span className="block font-mono-techno text-muted-foreground">
              FOR
            </span>
            <span className="block">URBAN</span>
            <span className="block">REBELS</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground font-light tracking-wide">
            Tech-inspired minimalism meets underground culture. <br />
            Redefining streetwear for the digital age.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
            <button className="btn-techno px-8 py-4 text-base">
              EXPLORE COLLECTION
            </button>
            <button className="border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-base font-medium tracking-wide uppercase transition-all duration-200">
              BRAND STORY
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-foreground opacity-50"></div>
        <div className="w-2 h-2 bg-foreground mt-2 mx-auto"></div>
      </div>
    </section>
  );
};

const BrandStorySection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-techno">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-muted-foreground">
                Brand Philosophy
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                WHERE
                <br />
                TECHNOLOGY
                <br />
                MEETS
                <br />
                <span className="text-muted-foreground">FASHION</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                We exist at the intersection of digital innovation and physical
                expression. Our designs speak to the modern urban dweller who
                navigates between virtual and real worlds.
              </p>
              <p className="text-lg leading-relaxed">
                Every piece is crafted with precision, embodying the clean
                aesthetics of minimalism while carrying the rebellious spirit of
                underground culture.
              </p>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-foreground to-muted border-2 border-foreground">
              <div className="absolute inset-8 border border-background bg-background/10"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-background font-mono-techno text-6xl md:text-8xl font-black">
                .01
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProductCategoriesSection = () => {
  const categories = [
    {
      name: "TECH WEAR",
      description: "Function meets form in wearable technology",
      count: "24 ITEMS",
    },
    {
      name: "MINIMAL BASICS",
      description: "Essential pieces for the modern wardrobe",
      count: "18 ITEMS",
    },
    {
      name: "STATEMENT PIECES",
      description: "Bold designs for individual expression",
      count: "12 ITEMS",
    },
    {
      name: "ACCESSORIES",
      description: "Complete your urban aesthetic",
      count: "36 ITEMS",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted">
      <div className="container-techno">
        <div className="text-center mb-16">
          <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">
            Product Categories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            URBAN ARSENAL
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group bg-background p-8 md:p-12 border-2 border-transparent hover:border-foreground transition-all duration-300 cursor-pointer"
            >
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    {category.count}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-muted-foreground transition-colors">
                  {category.name}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center space-x-2 text-sm font-mono-techno tracking-wide uppercase">
                  <span>EXPLORE</span>
                  <div className="w-8 h-px bg-foreground group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedSection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container-techno">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-background/70">
              Featured Collection
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter">
              NEON
              <br />
              <span className="text-background/50">SHADOWS</span>
            </h2>
          </div>

          <p className="text-xl max-w-2xl mx-auto text-background/80 leading-relaxed">
            Limited edition pieces that blur the line between digital aesthetics
            and physical reality.
          </p>

          <div className="pt-8">
            <button className="bg-background text-foreground hover:bg-background/90 px-8 py-4 text-base font-medium tracking-wide uppercase transition-all duration-200">
              VIEW COLLECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsletterSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-techno">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              JOIN THE
              <br />
              <span className="font-mono-techno">UNDERGROUND</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get exclusive access to drops, behind-the-scenes content, and
              urban culture insights.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="YOUR.EMAIL@DOMAIN.COM"
              className="flex-1 bg-transparent border-2 border-foreground px-4 py-3 text-sm font-mono-techno tracking-wide uppercase placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground"
            />
            <button className="btn-techno px-6 py-3 text-sm">SUBSCRIBE</button>
          </div>

          <div className="text-xs text-muted-foreground font-mono-techno tracking-wide">
            NO SPAM. UNSUBSCRIBE ANYTIME. URBAN CODE RESPECTED.
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Index() {
  return (
    <>
      <HeroSection />
      <BrandStorySection />
      <ProductCategoriesSection />
      <FeaturedSection />
      <NewsletterSection />
    </>
  );
}
