interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container-techno text-center space-y-8">
        <div className="space-y-4">
          <div className="font-mono-techno text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Coming Soon
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter">
            {title.toUpperCase()}
          </h1>
        </div>

        <div className="space-y-6 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            This section is under construction. We're crafting something
            extraordinary that embodies our techno-minimal aesthetic and urban
            rebel spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.history.back()}
              className="btn-techno px-8 py-4"
            >
              GO BACK
            </button>
            <button className="border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background px-8 py-4 text-base font-medium tracking-wide uppercase transition-all duration-200">
              NOTIFY ME
            </button>
          </div>
        </div>

        {/* Geometric decoration */}
        <div className="relative mt-16">
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="w-4 h-4 bg-foreground transform rotate-45 mb-4"></div>
            <div className="w-px h-16 bg-foreground mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
