import Image from "next/image";
import type { ReactNode } from "react";

const MARKETPLACE = "https://plugins.geteli.tech";
const RELEASES = "https://github.com/ShadowESC95/ELI_v2.0/releases/latest";
const REPO = "https://github.com/ShadowESC95/ELI_v2.0";

/* Every figure on this page is checked against the repository: 223 is the entry
   count in capability_manifest.json and 181 of those are routable, the voice
   library is 166 voices across 45 languages, and the release pipeline builds
   .exe, .dmg and AppImage. Nothing here should be a number nobody can reproduce. */

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--bg)]/85 border-b border-[color:var(--line)]">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Image src="/eli-icon.png" alt="" width={28} height={28} priority
                 className="rounded-md" style={{ boxShadow: "0 0 20px rgba(0,209,253,.35)" }} />
          <span className="text-lg">ELI</span>
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="#what" className="hidden md:block text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">Capabilities</a>
          <a href="#how" className="hidden md:block text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">How it works</a>
          <a href="#private" className="hidden sm:block text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">Privacy</a>
          <a href={MARKETPLACE} className="hidden sm:block text-[color:var(--fg-dim)] hover:text-[color:var(--fg)]">Marketplace</a>
          <a href={RELEASES} className="btn btn-primary !py-2 !px-4 !text-sm">Download</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="hero-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-24">
        <Image src="/eli-icon.png" alt="ELI" width={96} height={96} priority
               className="rounded-2xl mb-9"
               style={{ boxShadow: "0 0 70px rgba(0,209,253,.3)" }} />
        <p className="kicker mb-5">Local-first AI · Windows · macOS · Linux</p>
        <h1 className="text-[2.6rem] leading-[1.08] sm:text-6xl sm:leading-[1.04] font-semibold tracking-[-0.03em] max-w-4xl">
          The assistant that runs on
          <span className="text-[color:var(--cyan)]"> your machine</span>,
          not someone else&rsquo;s.
        </h1>
        <p className="mt-7 text-lg sm:text-xl text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
          ELI sees your screen, hears you, speaks back, remembers what you told it
          weeks ago, and does 223 different things on your behalf &mdash; running
          entirely on hardware you own. No account. No subscription. No telemetry.
          Offline by default, and it stays that way until you decide otherwise.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={RELEASES} className="btn btn-primary">Download ELI</a>
          <a href="#what" className="btn btn-ghost">See what it does</a>
        </div>
        <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 max-w-3xl">
          {[
            ["223", "capabilities, 181 routable"],
            ["166", "voices, 45 languages"],
            ["0", "bytes sent anywhere"],
            ["3", "platforms, one installer"],
          ].map(([n, label]) => (
            <div key={label}>
              <dt className="text-3xl font-semibold tracking-tight text-[color:var(--cyan)]">{n}</dt>
              <dd className="mt-1 text-sm text-[color:var(--fg-faint)] leading-snug">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Feature({ kicker, title, children }: { kicker: string; title: string; children: ReactNode }) {
  return (
    <div className="card card-hover p-7">
      <p className="kicker mb-3">{kicker}</p>
      <h3 className="text-lg font-semibold tracking-tight mb-3">{title}</h3>
      <p className="text-[color:var(--fg-dim)] leading-relaxed text-[.95rem]">{children}</p>
    </div>
  );
}

function What() {
  return (
    <section id="what" className="rule">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="kicker mb-4">Capabilities</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] max-w-3xl">
          Not a chat box with a microphone bolted on.
        </h2>
        <p className="mt-5 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
          Most assistants answer questions. ELI perceives, remembers, decides and
          acts &mdash; and you can watch every part of it work, because all of it
          is running on your own machine.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Feature kicker="Voice" title="It hears you and answers aloud">
            Local speech recognition and synthesis, a 166-voice library across 45
            languages, and character voices with gender-matched fallbacks. Record
            your own voice and have it speak in that. An animated avatar&rsquo;s
            mouth follows the audio it is actually producing, not a canned loop.
          </Feature>
          <Feature kicker="Vision" title="It can see your screen">
            A local vision model reads what is in front of you &mdash; documents,
            interfaces, whatever is on the display &mdash; with OCR and an ambient
            mode. Ask what is on screen and it takes a real look rather than
            guessing from context.
          </Feature>
          <Feature kicker="Gaze" title="It follows where you look">
            Eye tracking, so a spoken &ldquo;click that&rdquo; acts on whatever
            your gaze is resting on. Hands stay on the keyboard.
          </Feature>
          <Feature kicker="Memory" title="It remembers, and forgets properly">
            Recall runs vector search and keyword search side by side and fuses
            them by rank, so a half-remembered phrase finds the same memory as a
            vague description. Memories fade with age unless they keep proving
            useful, duplicates fold together, and facts you mention in passing get
            promoted into a knowledge graph.
          </Feature>
          <Feature kicker="Action" title="223 things it can actually do">
            Open and drive applications, control media, manage files, write and
            debug code, search the web when you allow it, watch for events and act
            on them, and run scheduled work overnight while you sleep.
          </Feature>
          <Feature kicker="Reasoning" title="It thinks harder when it needs to">
            Five reasoning depths from quick to expert, with per-mode budgets and
            confidence-driven escalation &mdash; so a simple question stays fast
            and a hard one gets the time it deserves.
          </Feature>
          <Feature kicker="Agents" title="It writes its own tools">
            A bus of specialist agents runs in parallel on a real orchestrator with
            retries, fallbacks and timeouts. Ask for a new agent and ELI writes it,
            validates it, and registers it live.
          </Feature>
          <Feature kicker="Training" title="Fine-tune it on your own work">
            Built-in LoRA and QLoRA training with a guided wizard, running on your
            own GPU. Your data never leaves the machine to make the model better at
            your job.
          </Feature>
          <Feature kicker="Extensible" title="Plugins and MCP servers">
            Install community tools in a click, or connect any MCP server. Each one
            is checksummed, scanned by eleven engines, sandboxed at runtime, and has
            to ask before it touches the network, your files, or your camera.
          </Feature>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="shrink-0 h-9 w-9 rounded-lg grid place-items-center font-mono text-sm font-semibold"
            style={{ background: "var(--bg-raise)", border: "1px solid var(--line)", color: "var(--cyan)" }}>
        {n}
      </span>
      <div>
        <h3 className="font-semibold mb-1.5">{title}</h3>
        <p className="text-[color:var(--fg-dim)] text-[.95rem] leading-relaxed">{children}</p>
      </div>
    </li>
  );
}

function How() {
  return (
    <section id="how" className="rule">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-14">
          <div>
            <p className="kicker mb-4">How it works</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
              A whole pipeline, not a prompt.
            </h2>
            <p className="mt-6 text-[color:var(--fg-dim)] leading-relaxed">
              Every turn runs the same route: what you said is understood, relevant
              memory is gathered, an action is chosen, and the result is checked
              before it reaches you.
            </p>
            <p className="mt-4 text-[color:var(--fg-dim)] leading-relaxed">
              ELI is model-agnostic. Point it at any GGUF model and it works out
              what your hardware can hold &mdash; GPU layers, batch size, context
              &mdash; rather than making you guess.
            </p>
          </div>
          <ol className="space-y-7">
            <Step n="1" title="Perceive">
              Speech, text, screen and gaze arrive together. Tone is read from both
              the words and the audio, so the reply matches how you actually sound.
            </Step>
            <Step n="2" title="Recall">
              Vector and keyword search run over your history in parallel and merge
              by rank, alongside a knowledge graph of durable facts about you.
            </Step>
            <Step n="3" title="Decide">
              A router picks between answering, acting, or asking. Specialist agents
              run in parallel where they help, on an orchestrator with real retries
              and timeouts.
            </Step>
            <Step n="4" title="Act">
              One of 223 capabilities runs &mdash; opening an app, editing a file,
              calling an MCP tool, scheduling work for tonight.
            </Step>
            <Step n="5" title="Check">
              Grounding guards verify the answer against the evidence actually
              gathered, so ELI does not claim an action it never took.
            </Step>
          </ol>
        </div>
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
              Network access is not a setting scattered through the code. Every
              route out of the machine passes through a single guard, backed by a
              process-wide socket failsafe &mdash; so a component that tries to go
              online when you have not allowed it does not get a warning, it gets a
              closed door.
            </p>
            <div className="mt-8">
              <a href={REPO} className="btn btn-ghost">Read the source</a>
            </div>
          </div>
          <div className="card p-7">
            <p className="kicker mb-5">What stays on your machine</p>
            <ul className="space-y-4 text-[.95rem]">
              {[
                ["Your conversations", "A local SQLite database. Never uploaded, never used to train anything."],
                ["The model", "Runs on your own CPU or GPU. Swap it for any GGUF model you like."],
                ["Your voice and screen", "Speech and vision are processed on-device. Nothing is streamed out."],
                ["Your files", "Read only when a task needs them, and only where you allow."],
                ["Your training data", "Fine-tuning runs on your GPU. The dataset never leaves the disk."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden className="mt-[.45rem] h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "var(--cyan)" }} />
                  <span>
                    <strong className="font-semibold">{t}</strong>
                    <span className="text-[color:var(--fg-dim)]"> &mdash; {d}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 pt-5 border-t border-[color:var(--line)] text-sm text-[color:var(--fg-faint)] leading-relaxed">
              When you do want the internet &mdash; a web search, the news &mdash;
              you turn it on, and it goes through the same guard every time.
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
            Add tools in a click. Every one of them read by a person first.
          </h2>
          <p className="mt-6 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
            Plugins and MCP servers built by the community. Each is signed at
            approval, checksummed on download, scanned on your own machine, and has
            to ask you about every capability it wants before it is installed.
          </p>
          <p className="mt-4 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
            Review raises the floor &mdash; it is not a guarantee, and ELI still asks.
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

function Specs() {
  const rows: [string, string][] = [
    ["Platforms", "Windows (.exe), macOS (.dmg), Linux (AppImage)"],
    ["Models", "Any GGUF model, loaded locally. Ollama supported."],
    ["Acceleration", "NVIDIA (CUDA), AMD (ROCm), Intel Arc, or CPU only"],
    ["Fine-tuning", "LoRA / QLoRA with 4-bit quantisation, on your own GPU"],
    ["Storage", "Local SQLite plus a FAISS vector index"],
    ["Network", "Offline by default; every route gated at one chokepoint"],
    ["Licence", "Source-available under PolyForm Internal Use"],
  ];
  return (
    <section className="rule">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <p className="kicker mb-4">Specifications</p>
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em] mb-10">
          Runs on what you already have.
        </h2>
        <div className="card overflow-hidden">
          <table className="w-full text-[.95rem]">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className={i ? "border-t border-[color:var(--line)]" : ""}>
                  <th scope="row" className="text-left align-top font-medium p-5 w-[34%] sm:w-[26%]">{k}</th>
                  <td className="p-5 text-[color:var(--fg-dim)]">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Download() {
  return (
    <section className="rule relative overflow-hidden">
      <div className="hero-bg" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em]">Run it yourself.</h2>
        <p className="mt-6 text-[color:var(--fg-dim)] max-w-xl mx-auto leading-relaxed">
          One installer for Windows, macOS and Linux. It brings its own voices and
          everything else it needs &mdash; point it at a model and it starts.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href={RELEASES} className="btn btn-primary">Download the latest release</a>
          <a href={REPO} className="btn btn-ghost">View on GitHub</a>
        </div>
        <p className="mt-8 text-sm text-[color:var(--fg-faint)]">
          Windows (.exe) &middot; macOS (.dmg) &middot; Linux (AppImage)
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="rule">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm">
        <div className="flex items-center gap-2.5">
          <Image src="/eli-icon.png" alt="" width={22} height={22} className="rounded" />
          <p className="text-[color:var(--fg-faint)]">
            © {new Date().getFullYear()} Jason Fitzgibbon Bridgeman. Source-available
            under PolyForm Internal Use.
          </p>
        </div>
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
      <How />
      <Private />
      <Marketplace />
      <Specs />
      <Download />
      <Footer />
    </main>
  );
}
