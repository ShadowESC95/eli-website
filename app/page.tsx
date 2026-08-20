import Image from "next/image";
import type { ReactNode } from "react";

const MARKETPLACE = "https://plugins.geteli.tech";
const RELEASES = "https://github.com/ShadowESC95/ELI_v2.0/releases/latest";
const REPO = "https://github.com/ShadowESC95/ELI_v2.0";

/* Everything stated here is checked against the codebase: 223 is the entry count
   in capability_manifest.json, the voice library is 166 voices / 45 languages, and
   the release pipeline builds .exe, .dmg and AppImage. Nothing on this page should
   be a number nobody can reproduce. */

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--bg)]/85 border-b border-[color:var(--line)]">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image
            src="/eli-icon.png"
            alt=""
            width={28}
            height={28}
            priority
            className="rounded-md"
            style={{ boxShadow: "0 0 20px rgba(0,209,253,.35)" }}
          />
          <span className="text-lg">ELI</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#what" className="hidden sm:block text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">
            What it does
          </a>
          <a href="#private" className="hidden sm:block text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">
            Privacy
          </a>
          <a href={MARKETPLACE} className="text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">
            Marketplace
          </a>
          <a href={RELEASES} className="btn btn-primary !py-2 !px-4 !text-sm">
            Download
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <Image
          src="/eli-icon.png"
          alt="ELI"
          width={92}
          height={92}
          priority
          className="rounded-2xl mb-8"
          style={{ boxShadow: "0 0 60px rgba(0,209,253,.28)" }}
        />
        <p className="kicker mb-5">Local-first AI &middot; Windows &middot; macOS &middot; Linux</p>
        <h1 className="text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.05] font-semibold tracking-[-0.03em] max-w-4xl">
          The assistant that runs on
          <span className="text-[color:var(--cyan)]"> your machine</span>,
          not someone else&rsquo;s.
        </h1>
        <p className="mt-7 text-lg sm:text-xl text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
          ELI is a complete AI assistant — voice, vision, memory, and 223 things it
          can actually do — running entirely on your own hardware. No account. No
          subscription. No telemetry. It is offline by default, and it stays that
          way until you decide otherwise.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={RELEASES} className="btn btn-primary">
            Download ELI
          </a>
          <a href={MARKETPLACE} className="btn btn-ghost">
            Browse the marketplace
          </a>
        </div>
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-3xl">
          {[
            ["223", "capabilities"],
            ["166", "voices, 45 languages"],
            ["0", "data sent anywhere"],
            ["3", "platforms"],
          ].map(([n, label]) => (
            <div key={label}>
              <dt className="text-3xl font-semibold tracking-tight">{n}</dt>
              <dd className="mt-1 text-sm text-[color:var(--fg-faint)]">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Feature({
  kicker, title, children,
}: { kicker: string; title: string; children: ReactNode }) {
  return (
    <div className="card card-hover p-7">
      <p className="kicker mb-3">{kicker}</p>
      <h3 className="text-xl font-semibold tracking-tight mb-3">{title}</h3>
      <p className="text-[color:var(--fg-dim)] leading-relaxed text-[.97rem]">{children}</p>
    </div>
  );
}

function What() {
  return (
    <section id="what" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] max-w-2xl">
        Not a chat box with a microphone bolted on.
      </h2>
      <p className="mt-5 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
        ELI listens, looks, remembers what you told it weeks ago, and does things on
        your behalf — on hardware you own, with models you chose.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <Feature kicker="Voice" title="It hears you and answers aloud">
          Local speech recognition and synthesis, a 166-voice library across 45
          languages, character voices, and an animated avatar whose mouth follows
          the audio it is actually producing. You can record your own voice and
          have it speak in that.
        </Feature>
        <Feature kicker="Vision" title="It can see your screen">
          A local vision model reads what is in front of you — screenshots,
          documents, whatever is on the display — and answers about it. Ask what
          is on screen and it takes a real look rather than guessing.
        </Feature>
        <Feature kicker="Memory" title="It remembers, and it forgets properly">
          Recall runs vector search and keyword search side by side and fuses them
          by rank, so a half-remembered phrase finds the same memory as a vague
          description. Memories fade with age unless they keep proving useful, and
          duplicates are folded together instead of piling up.
        </Feature>
        <Feature kicker="Action" title="223 things it can do">
          Control applications and media, manage files, run and debug code, search
          the web when you allow it, watch for events and act on them, and run
          scheduled work overnight while you sleep.
        </Feature>
        <Feature kicker="Extensible" title="Plugins, agents and MCP servers">
          Add tools from the marketplace in a click, connect any MCP server, or
          have ELI write you a new agent. Every one of them is scanned, sandboxed,
          and has to ask before it touches the network, your files, or your camera.
        </Feature>
        <Feature kicker="Yours" title="Train it on your own work">
          Built-in LoRA fine-tuning with a guided wizard, running on your own GPU.
          Your data never leaves the machine to make the model better at your job.
        </Feature>
      </div>
    </section>
  );
}

function Private() {
  return (
    <section id="private" className="rule">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="kicker mb-4">Offline by default</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              Privacy you can check, not a promise you have to take.
            </h2>
            <p className="mt-6 text-[color:var(--fg-dim)] leading-relaxed">
              Most assistants ask you to trust a privacy policy. ELI is built so the
              question barely arises: the model runs on your hardware, your
              conversations live in a database on your disk, and there is no server
              to send anything to.
            </p>
            <p className="mt-4 text-[color:var(--fg-dim)] leading-relaxed">
              Network access is not a setting scattered across the code. Every route
              out of the machine passes through a single guard, backed by a
              process-wide socket failsafe — so a component that tries to go online
              when you have not allowed it does not get a warning, it gets a closed
              door.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={REPO} className="btn btn-ghost">Read the source</a>
            </div>
          </div>
          <div className="card p-7">
            <p className="kicker mb-5">What stays on your machine</p>
            <ul className="space-y-4 text-[.97rem]">
              {[
                ["Your conversations", "A local SQLite database. Never uploaded, never used to train anything."],
                ["The model", "Runs on your own CPU or GPU. Swap it for any GGUF model you like."],
                ["Your voice and screen", "Speech and vision are processed on-device. Nothing is streamed out."],
                ["Your files", "Read only when a task needs them, and only where you allow."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="mt-[.45rem] h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "var(--cyan)" }} />
                  <span>
                    <strong className="font-semibold">{t}</strong>
                    <span className="text-[color:var(--fg-dim)]"> — {d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-[color:var(--line)] text-sm text-[color:var(--fg-faint)] leading-relaxed">
              When you do want the internet — a web search, the news — you turn it
              on, and it goes through the same guard every time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marketplace() {
  return (
    <section className="rule">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="card p-9 sm:p-12">
          <p className="kicker mb-4">Marketplace</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] max-w-2xl">
            Add tools in a click. Every one of them reviewed first.
          </h2>
          <p className="mt-6 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
            Plugins and MCP servers, built by the community and read by a person
            before they are listed. Each one is signed at approval, checksummed on
            download, scanned on your own machine, and has to ask you about every
            capability it wants before it is installed.
          </p>
          <p className="mt-4 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
            Review raises the floor — it is not a guarantee, and ELI still asks.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href={MARKETPLACE} className="btn btn-primary">Open the marketplace</a>
            <a href={`${MARKETPLACE}#submit`} className="btn btn-ghost">Publish a plugin</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section className="rule">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em]">
          Run it yourself.
        </h2>
        <p className="mt-6 text-[color:var(--fg-dim)] max-w-xl mx-auto leading-relaxed">
          One installer for Windows, macOS and Linux. It brings its own voices and
          everything else it needs — point it at a model and it starts.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href={RELEASES} className="btn btn-primary">Download the latest release</a>
          <a href={REPO} className="btn btn-ghost">View on GitHub</a>
        </div>
        <p className="mt-8 text-sm text-[color:var(--fg-faint)]">
          Windows (.exe) · macOS (.dmg) · Linux (AppImage)
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rule">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm">
        <p className="text-[color:var(--fg-faint)]">
          © {new Date().getFullYear()} Jason Fitzgibbon Bridgeman. Source-available
          under PolyForm Internal Use.
        </p>
        <div className="flex gap-6">
          <a href={MARKETPLACE} className="text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">Marketplace</a>
          <a href={REPO} className="text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">GitHub</a>
          <a href={RELEASES} className="text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">Download</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <What />
      <Private />
      <Marketplace />
      <Download />
      <Footer />
    </main>
  );
}
