import { useState, useEffect } from "react";
import { CheckCircle, Smartphone, BookOpen, Play, ArrowRight, Mail, Shield, FileText } from "lucide-react";

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
    <div className="flex items-center justify-center gap-3 my-6">
      {[
        { value: time.hours, label: "Hours" },
        { value: time.minutes, label: "Minutes" },
        { value: time.seconds, label: "Seconds" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="bg-accent/10 rounded-xl w-18 h-18 flex items-center justify-center border border-accent/20">
            <span className="text-2xl font-semibold text-accent font-mono">{pad(item.value)}</span>
          </div>
          <span className="text-[11px] text-muted-foreground mt-1.5">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const CTAButton = ({ children, variant = "primary" }: { children: React.ReactNode; variant?: "primary" | "secondary" }) => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 w-full font-semibold text-base py-4 px-6 rounded-2xl text-center transition-all duration-200 ${
      variant === "primary"
        ? "bg-accent text-accent-foreground hover:opacity-90 shadow-sm"
        : "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
    }`}
  >
    {children}
    <ArrowRight className="w-4 h-4" />
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-lg mx-auto px-5 py-8">

        {/* Timer badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-live" />
            <span className="text-xs font-medium text-accent">
              Class starts soon — limited spots
            </span>
          </div>
        </div>

        {/* SECTION 1: HERO */}
        <section className="text-center mb-12">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight mb-4 text-foreground">
            Learn How to Get Started Making Money Online Using Just Your Phone
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto mb-2">
            Join a free beginner-friendly class that explains simple online methods you can start from anywhere.
          </p>
          <div className="flex items-center justify-center gap-1 text-[11px] text-muted-foreground mb-4">
            <span>No experience needed</span>
            <span>•</span>
            <span>Beginner friendly</span>
            <span>•</span>
            <span>Learn at your own pace</span>
          </div>

          <CountdownTimer />

          <CTAButton>Join Free Class Now</CTAButton>

          <p className="text-[11px] text-muted-foreground mt-4 max-w-xs mx-auto leading-relaxed">
            This is a free educational training. Results are not guaranteed and depend on individual effort.
          </p>
        </section>

        {/* SECTION 2: WHAT YOU'LL LEARN */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-center mb-6 text-foreground">
            What You'll Learn in This Free Class
          </h2>
          <div className="space-y-3">
            {[
              { icon: Smartphone, text: "How beginners are getting started online" },
              { icon: BookOpen, text: "Simple ways to earn using your phone" },
              { icon: Play, text: "Tools and platforms used daily" },
              { icon: CheckCircle, text: "Step-by-step guidance to help you begin" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-card rounded-xl p-4 border border-border">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <item.icon className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: HOW IT WORKS */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-center mb-6 text-foreground">
            How It Works
          </h2>
          <div className="space-y-4">
            {[
              { step: "1", text: "Click the button to join the free class" },
              { step: "2", text: "Watch the training and understand the process" },
              { step: "3", text: "Decide how you want to get started" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <p className="text-sm text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SOCIAL PROOF */}
        <section className="mb-12 bg-card rounded-2xl p-6 border border-border text-center">
          <h2 className="text-lg font-bold mb-3 text-foreground">
            Real Learning Experience
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            This training has helped many beginners understand how online income works and how to take their first steps.
          </p>
          <p className="text-[11px] text-muted-foreground/70">
            Examples shared are for educational purposes and do not guarantee results.
          </p>
        </section>

        {/* SECTION 5: FINAL CTA */}
        <section className="text-center mb-12">
          <h2 className="text-xl font-bold mb-3 text-foreground">
            Ready to Learn Something New?
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Join the free class now and see how it works step by step.
          </p>
          <CTAButton variant="primary">Reserve My Free Spot</CTAButton>
        </section>

        {/* SECTION 6: FOOTER */}
        <footer className="border-t border-border pt-6 pb-4 text-center space-y-3">
          <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
            <a href="mailto:flexooo@gmail.com" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Mail className="w-3.5 h-3.5" />
              Contact
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Shield className="w-3.5 h-3.5" />
              Privacy Policy
            </a>
            <a href="#" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <FileText className="w-3.5 h-3.5" />
              Terms
            </a>
          </div>
          <p className="text-[10px] text-muted-foreground/60 max-w-xs mx-auto leading-relaxed">
            This website is not affiliated with TikTok. All information provided is for educational purposes only.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Index;
