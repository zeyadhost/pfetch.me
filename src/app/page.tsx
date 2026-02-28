import { Paintbrush, Bot, Lock, Coins, Zap, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-nord-0 text-nord-6 font-sans selection:bg-nord-8 selection:text-nord-0">
      <nav className="flex justify-between items-center p-6 border-b-4 border-nord-3">
        <div className="text-3xl font-black tracking-tight text-nord-8 brutal-shadow bg-nord-0 border-4 border-nord-8 px-4 py-2">
          pfetch.me
        </div>
        <div className="hidden md:flex gap-8 font-bold text-lg items-center">
          <a href="#login" className="px-6 py-2 bg-nord-3 text-nord-6 font-bold brutal-border brutal-shadow hover:bg-nord-2 transition-all">
            Login
          </a>
        </div>
      </nav>

      <main className="px-6 py-24 md:py-32 max-w-7xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-6 text-nord-4">
          Own your <span className="text-nord-8 underline decoration-nord-11 decoration-8 underline-offset-8">identity.</span>
        </h1>
        <p className="text-xl md:text-3xl max-w-3xl font-medium text-nord-4 mb-12 leading-tight border-l-4 border-nord-14 pl-6 text-left">
          The ultimate bio-link. Complete custom CSS, built-in AI generation, end-to-end encrypted file hosting, and monetization.
        </p>

        <div className="flex flex-col md:flex-row gap-6 w-full max-w-2xl justify-center">
          <div className="flex w-full relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-nord-3">pfetch.me/</span>
            <input 
              type="text" 
              placeholder="username" 
              className="w-full bg-nord-6 text-nord-0 text-xl font-bold py-4 pl-32 pr-4 brutal-border focus:outline-none focus:border-nord-8"
            />
          </div>
          <button className="bg-nord-8 text-nord-0 text-xl font-black px-12 py-4 brutal-border brutal-shadow whitespace-nowrap hover:bg-nord-7">
            Claim it
          </button>
        </div>
      </main>

      <div className="bg-nord-13 border-y-4 border-nord-0 overflow-hidden py-4 text-nord-0 flex">
        <div className="whitespace-nowrap font-black text-2xl uppercase tracking-widest flex items-center animate-marquee-horizontal w-max">
            <div className="flex gap-12 px-6">
              <span>Themes & CSS</span>
              <span>&bull;</span>
              <span>AI Bio Generation</span>
              <span>&bull;</span>
              <span>End-to-End Encryption</span>
              <span>&bull;</span>
              <span>Monetization Layer</span>
              <span>&bull;</span>
              <span>Organizations</span>
            </div>
            <div className="flex gap-12 px-6">
              <span>Themes & CSS</span>
              <span>&bull;</span>
              <span>AI Bio Generation</span>
              <span>&bull;</span>
              <span>End-to-End Encryption</span>
              <span>&bull;</span>
              <span>Monetization Layer</span>
              <span>&bull;</span>
              <span>Organizations</span>
            </div>
        </div>
      </div>

      <section id="features" className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FeatureCard 
          title="Custom Everything" 
          description="A pure Theme System where you bring your own custom CSS. Modify the banner, background (gif/video/png), frames, effects, music, and more."
          color="bg-nord-11"
          Icon={Paintbrush}
        />
        <FeatureCard 
          title="AI-Powered" 
          description="Let AI generate the perfect bio by reading your links, repos, and portfolios. Build widgets instantly with our AI builder."
          color="bg-nord-12"
          Icon={Bot}
        />
        <FeatureCard 
          title="Encrypt & Host" 
          description="End-to-end encrypted file hosting right on your profile. Password-protect links and content to keep your digital space yours."
          color="bg-nord-14"
          Icon={Lock}
        />
        <FeatureCard 
          title="Monetization Layer" 
          description="Add crypto payment links, Stripe checkout, and trade premium usernames or limited profile frames in the marketplace."
          color="bg-nord-13"
          Icon={Coins}
        />
        <FeatureCard 
          title="Real-Time Editing" 
          description="Watch your profile update live across all devices as you edit. Unmatched speed and reliability."
          color="bg-nord-9"
          Icon={Zap}
        />
        <FeatureCard 
          title="Custom Domains" 
          description="Map your own custom domain with auto-provisioned SSL certificates instantly. True ownership."
          color="bg-nord-15"
          Icon={Globe}
        />
      </section>

      <footer className="border-t-4 border-nord-3 py-12 text-center text-nord-4 font-bold">
        <p>Built with purpose. &copy; 2026 pfetch.me</p>
      </footer>
    </div>
  );
}

function FeatureCard({ title, description, color, Icon }: { title: string, description: string, color: string, Icon: React.ElementType }) {
  return (
    <div className={`p-8 brutal-border brutal-shadow bg-nord-1 text-nord-6 flex flex-col gap-4 group hover:-translate-y-2 transition-transform`}>
      <div className={`w-12 h-12 brutal-border ${color} brutal-shadow mb-4 flex items-center justify-center`}>
        <Icon size={24} className="text-nord-0" />
      </div>
      <h3 className="text-2xl font-black uppercase text-nord-6">{title}</h3>
      <p className="text-nord-4 font-medium leading-relaxed">{description}</p>
    </div>
  );
}
