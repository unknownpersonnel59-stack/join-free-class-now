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

const images = [
  "https://courageous-kleicha-b4c7b0.netlify.app/1.jpg",
  "https://courageous-kleicha-b4c7b0.netlify.app/2.jpg",
  "https://courageous-kleicha-b4c7b0.netlify.app/3.jpg",
  "https://courageous-kleicha-b4c7b0.netlify.app/4.jpg",
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
              src="https://courageous-kleicha-b4c7b0.netlify.app/host.jpg"
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

        {/* Image Gallery */}
        <section className="grid grid-cols-2 gap-2 mb-10">
          {images.map((src, i) => (
            <div key={i} className="rounded-xl overflow-hidden aspect-square bg-secondary border border-border hover:scale-[1.02] transition-transform duration-200">
              <img src={src} alt={`Proof ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </section>

        {/* Final CTA */}
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
    </div>
  );
};

export default Index;
