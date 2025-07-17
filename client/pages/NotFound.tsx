import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-techno opacity-20"></div>

      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-foreground shape-diamond"></div>
      <div className="absolute bottom-1/4 right-20 w-8 h-8 border-2 border-foreground"></div>

      <div className="container-techno text-center z-10">
        <div className="space-y-8">
          {/* Error Code */}
          <div className="space-y-4">
            <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-muted-foreground">
              System Error
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter">
              404
            </h1>
            <div className="font-mono-techno text-sm tracking-[0.2em] uppercase text-muted-foreground">
              PAGE_NOT_FOUND
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed">
              The requested path does not exist in our urban digital space.
              Perhaps you've ventured too far into the underground.
            </p>
            <div className="font-mono-techno text-xs text-muted-foreground tracking-wide">
              ERROR_PATH: {location.pathname}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link to="/" className="btn-techno px-8 py-4">
              RETURN HOME
            </Link>
            <button
              onClick={() => window.history.back()}
              className="border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-base font-medium tracking-wide uppercase transition-all duration-200"
            >
              GO BACK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
