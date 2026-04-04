import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://chat.whatsapp.com/LihwSEwAtUd3ZxhSQym0wu?mode=gi_t";

const CountdownTimer = () => {
  const [time, setTime] = useState({ hours: 2, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-2 my-6">
      {[
        { value: time.hours, label: "HRS" },
        { value: time.minutes, label: "MIN" },
        { value: time.seconds, label: "SEC" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-secondary rounded-lg w-16 h-16 flex items-center justify-center border border-border">
            <span className="text-2xl font-bold text-foreground font-mono">{pad(item.value)}</span>
          </div>
          <span className="text-[10px] text-muted-foreground mt-1 tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const CTAButton = ({ children }: { children: React.ReactNode }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full bg-primary text-primary-foreground font-bold text-base py-4 px-6 rounded-xl text-center hover:brightness-110 transition-all duration-200 shadow-[0_0_30px_hsl(145,100%,45%,0.3)]"
  >
    {children}
  </a>
);

const galleryItems = [
  { type: "image", src: "/images/proof1.jpg", label: "✅ Living life on my own terms" },
  { type: "image", src: "/images/proof2.jpg", label: "💰 ₦6M in 29 days — same method you'll learn" },
  { type: "video", src: "/images/behind-the-scenes.mp4", label: "🎬 A day in the life — making money online" },
  { type: "image", src: "/images/proof3.jpg", label: "🚗 ₦100M dream car — unlocked" },
  { type: "image", src: "/images/proof4.jpg", label: "🔥 Experiences money can buy" },
  { type: "video", src: "/images/day-in-the-life.mp4", label: "🎥 Behind the scenes of my online business" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-md mx-auto px-4 py-6">

        {/* Live Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-destructive/15 border border-destructive/30 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-destructive rounded-full animate-pulse-live" />
            <span className="text-xs font-semibold text-destructive tracking-wide">
              LIVE — 20,000+ already registered
            </span>
          </div>
        </div>

        {/* Hero */}
        <section className="text-center mb-8">
          <h1 className="text-3xl font-extrabold leading-tight mb-4">
            Make <span className="text-primary">₦500K+/Month</span> Online.{" "}
            <span className="text-primary">Free Class.</span>
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            No degree. No startup capital. Just your phone, internet, and this one class.
          </p>

          <CountdownTimer />

          <CTAButton>JOIN FREE CLASS NOW →</CTAButton>

          <p className="text-[11px] text-muted-foreground mt-3">
            100% free · No hidden charges · Join from your phone
          </p>
        </section>

        {/* Stats Bar */}
        <section className="grid grid-cols-3 gap-2 mb-10">
          {[
            { value: "₦6M+", label: "Made in 29 Days" },
            { value: "20K+", label: "Registered" },
            { value: "FREE", label: "No Catch" },
          ].map((stat, i) => (
            <div key={i} className="bg-secondary rounded-xl p-3 text-center border border-border">
              <div className="text-primary font-bold text-lg">{stat.value}</div>
              <div className="text-muted-foreground text-[10px] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </section>

        {/* Host Section */}
        <section className="text-center mb-10">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full border-[3px] border-primary overflow-hidden bg-secondary">
            <img
              src="/images/host.jpg"
              alt="@OfficialFlexooo"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>
          <p className="text-xs text-muted-foreground mb-1">Your Host</p>
          <p className="text-primary font-bold text-lg mb-3">@OfficialFlexooo</p>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xs mx-auto">
            I found a method that works — consistently. Now I'm teaching it for free.
            No gatekeeping. No course fees. Just results.
          </p>
          <CTAButton>JOIN FREE CLASS NOW →</CTAButton>
        </section>

        {/* Gallery Grid */}
        <section className="grid grid-cols-2 gap-2 mb-10">
          {galleryItems.map((item, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-[3/4] bg-secondary border border-border relative group">
              {item.type === "image" ? (
                <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
              ) : (
                <video
                  src={item.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                <p className="text-white text-xs font-medium leading-snug">{item.label}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="text-center mb-10">
          <p className="text-foreground font-semibold text-lg mb-2">
            Everything you just saw started with one decision…
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Don't watch from the sidelines. Get in now — it's free.
          </p>
          <CTAButton>I WANT THIS LIFE — JOIN FREE →</CTAButton>
          <p className="text-[11px] text-muted-foreground mt-3">
            100% free · No hidden charges · Join from your phone
          </p>
        </section>

      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 z-50"
        aria-label="Join WhatsApp Group"
      >
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;
