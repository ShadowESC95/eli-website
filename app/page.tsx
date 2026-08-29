import Image from "next/image";
import type { ReactNode } from "react";

const MARKETPLACE = "https://plugins.geteli.tech";
const RELEASES = "https://github.com/ShadowESC95/ELI_v2.0/releases/latest";
const REPO = "https://github.com/ShadowESC95/ELI_v2.0";

/* Every figure here is checked against the ELI v2 repository: 225 capabilities with 208
   doc-routable — routable OR in_supported_list (per capabilities_doc.py); the raw
   `routable` field alone counts 184. 166 voices across 45 languages; release pipeline
   builds .exe, .dmg, and AppImage per platform. */

/* The hero visual: ELI's mark is a ring, so the field is a ring with particles
   orbiting INSIDE it and none crossing the boundary. It is the product argument
   as a picture — it all happens on your machine, nothing leaves. */
function Field() {
  const orbits = [
    { dur: "26s", r: 168, c: "var(--accent)",  angles: [0, 74, 143, 219, 291] },
    { dur: "38s", r: 124, c: "var(--violet)",  angles: [26, 108, 190, 262] },
    { dur: "19s", r: 82,  c: "var(--accent2)", angles: [58, 160, 300] },
  ];
  return (
    <div className="field" aria-hidden>
      <div className="field__ring" />
      <div className="field__ring field__ring--inner" />
      <div className="field__core" />
      {orbits.map((o, i) => (
        <div key={i} className="orbit" style={{ ["--dur" as string]: o.dur }}>
          {o.angles.map((a) => (
            <i key={a} style={{
              ["--a" as string]: `${a}deg`,
              ["--r" as string]: `${o.r}px`,
              ["--c" as string]: o.c,
            }} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[color:var(--bg)]/70 border-b border-[color:var(--line)]">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <Image src="/eli-icon.png" alt="" width={28} height={28} priority className="rounded-lg logo-glow" />
          <span className="text-lg font-bold tracking-[.16em] grad">ELI</span>
        </a>
        <div className="flex items-center gap-7 text-sm">
          <a href="#what" className="hidden md:block text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">Capabilities</a>
          <a href="#how" className="hidden md:block text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">Architecture</a>
          <a href="#private" className="hidden sm:block text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">Privacy</a>
          <a href={MARKETPLACE} className="hidden sm:block text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">Marketplace</a>
          <a href={RELEASES} className="btn btn-primary !py-2 !px-4 !text-sm">Download</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-16 sm:pt-24 sm:pb-24">
        <div className="grid lg:grid-cols-[1.05fr_.95fr] gap-16 items-center">
          <div>
            <p className="kicker kicker--bar mb-7">Local-first AI · Windows · macOS · Linux</p>
            <h1 className="display text-[3rem] sm:text-[4.4rem] lg:text-[5rem]">
              Your AI.<br />
              Your machine.<br />
              <span className="grad">Nothing leaves.</span>
            </h1>
            <p className="mt-8 text-lg text-[color:var(--fg-dim)] max-w-xl leading-relaxed">
              ELI sees your screen, hears you, speaks back, remembers what you told
              it weeks ago, and does 225 different things on your behalf &mdash;
              running entirely on hardware you own. No account. No subscription.
              No telemetry.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href={RELEASES} className="btn btn-primary">Download ELI</a>
              <a href="#what" className="btn btn-ghost">See what it does</a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Field />
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {[
            ["225", "capabilities · 208 routable"],
            ["166", "voices · 45 languages"],
            ["0", "bytes sent anywhere"],
            ["3", "platforms · three installers"],
          ].map(([n, label]) => (
            <div key={label}>
              <dt className="text-5xl font-extrabold tracking-tighter grad-cyan">{n}</dt>
              <dd className="mt-2 text-sm text-[color:var(--mut)] font-[family-name:var(--font-geist-mono)] tracking-wide">{label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const TICKER = [
  "open app", "web search", "read screen", "gaze click", "write code", "run tests",
  "schedule task", "play media", "summarise", "remember", "translate", "explain code",
  "generate image", "watch folder", "control lights", "take note", "debug traceback",
  "train lora", "call mcp tool", "check system", "read pdf", "speak reply",
];

function Ticker() {
  return (
    <div className="ticker py-6 border-y border-[color:var(--line)]">
      <div className="ticker__track">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-10 pr-10" aria-hidden={dup === 1}>
            {TICKER.map((t) => (
              <span key={t} className="ticker__item flex items-center gap-3">
                <span className="dot-cyan h-1 w-1 rounded-full inline-block" />
                {t}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Cell({ kicker, title, children, span = "" }:
  { kicker: string; title: string; children: ReactNode; span?: string }) {
  return (
    <div className={`card card-hover p-7 ${span}`}>
      <p className="kicker mb-3.5">{kicker}</p>
      <h3 className="text-lg font-semibold tracking-tight mb-3">{title}</h3>
      <p className="text-[color:var(--fg-dim)] leading-relaxed text-[.95rem]">{children}</p>
    </div>
  );
}

function What() {
  return (
    <section id="what">
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="kicker kicker--bar mb-6">Capabilities</p>
        <h2 className="display text-[2.2rem] sm:text-5xl max-w-3xl">
          Not a chat box with a<br /><span className="grad">microphone bolted on.</span>
        </h2>
        <p className="mt-7 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
          Most assistants answer questions. ELI perceives, remembers, decides and
          acts &mdash; and you can watch every part of it work, because all of it is
          running on your own machine.
        </p>
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Cell kicker="Voice" title="It hears you and answers aloud" span="lg:col-span-2">
            Local speech recognition and synthesis, a 166-voice library across 45
            languages, and character voices with gender-matched fallbacks. Record
            your own voice and have it speak in that. An animated avatar&rsquo;s
            mouth follows the audio it is actually producing, not a canned loop.
          </Cell>
          <Cell kicker="Gaze" title="It follows where you look">
            Eye tracking, so a spoken &ldquo;click that&rdquo; acts on whatever your
            gaze is resting on.
          </Cell>
          <Cell kicker="Vision" title="It can see your screen">
            A local vision model reads documents, interfaces, anything on the
            display, with OCR and an ambient mode. Ask what is on screen and it
            takes a real look rather than guessing.
          </Cell>
          <Cell kicker="Memory" title="It remembers, and forgets properly" span="lg:col-span-2">
            Recall runs vector search and keyword search side by side and fuses them
            by rank, so a half-remembered phrase finds the same memory as a vague
            description. Memories fade with age unless they keep proving useful,
            duplicates fold together, and facts you mention in passing are promoted
            into a knowledge graph.
          </Cell>
          <Cell kicker="Action" title="225 things it can actually do" span="lg:col-span-2">
            Open and drive applications, control media, manage files, write and debug
            code, search the web when you allow it, watch for events and act on them,
            and run scheduled work overnight while you sleep.
          </Cell>
          <Cell kicker="Reasoning" title="It thinks harder when it needs to">
            Five reasoning depths with per-mode budgets and confidence-driven
            escalation. Simple stays fast; hard gets the time it deserves.
          </Cell>
          <Cell kicker="Agents" title="It writes its own tools">
            Specialist agents run in parallel on a real orchestrator with retries,
            fallbacks and timeouts. Ask for a new agent and ELI writes it, validates
            it, and registers it live.
          </Cell>
          <Cell kicker="Training" title="Fine-tune it on your work">
            LoRA and QLoRA training with a guided wizard, on your own GPU. The
            dataset never leaves the disk.
          </Cell>
          <Cell kicker="Extensible" title="Plugins and MCP servers">
            Install community tools in a click, or connect any MCP server &mdash;
            each scanned, sandboxed, and required to ask before it acts.
          </Cell>
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <li className="flex gap-5">
      <span className="chip shrink-0 h-11 w-11 rounded-xl grid place-items-center text-sm">{n}</span>
      <div>
        <h3 className="font-semibold mb-1.5">{title}</h3>
        <p className="text-[color:var(--fg-dim)] text-[.95rem] leading-relaxed">{children}</p>
      </div>
    </li>
  );
}

function How() {
  return (
    <section id="how">
      <hr className="rule-fade" />
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid lg:grid-cols-[.9fr_1.1fr] gap-16">
          <div>
            <p className="kicker kicker--bar mb-6">Architecture</p>
            <h2 className="display text-[2.2rem] sm:text-5xl">
              A whole pipeline,<br /><span className="grad">not a prompt.</span>
            </h2>
            <p className="mt-7 text-[color:var(--fg-dim)] leading-relaxed">
              Every turn runs the same route: what you said is understood, relevant
              memory is gathered, an action is chosen, and the result is checked
              before it reaches you.
            </p>
            <p className="mt-4 text-[color:var(--fg-dim)] leading-relaxed">
              ELI is model-agnostic. Point it at any GGUF model and it works out what
              your hardware can hold &mdash; GPU layers, batch size, context &mdash;
              rather than making you guess.
            </p>
          </div>
          <ol className="space-y-8">
            <Step n="01" title="Perceive">
              Speech, text, screen and gaze arrive together. Tone is read from both
              the words and the audio, so the reply matches how you actually sound.
            </Step>
            <Step n="02" title="Recall">
              Vector and keyword search run over your history in parallel and merge
              by rank, alongside a knowledge graph of durable facts about you.
            </Step>
            <Step n="03" title="Decide">
              A router picks between answering, acting, or asking. Specialist agents
              run in parallel where they help.
            </Step>
            <Step n="04" title="Act">
              One of 225 capabilities runs &mdash; opening an app, editing a file,
              calling an MCP tool, scheduling work for tonight.
            </Step>
            <Step n="05" title="Verify">
              Grounding guards check the answer against the evidence actually
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
    <section id="private">
      <hr className="rule-fade" />
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="kicker kicker--bar mb-6">Offline by default</p>
            <h2 className="display text-[2.2rem] sm:text-5xl">
              Privacy you can check,<br /><span className="grad">not a promise.</span>
            </h2>
            <p className="mt-7 text-[color:var(--fg-dim)] leading-relaxed">
              Most assistants ask you to trust a privacy policy. ELI is built so the
              question barely arises: the model runs on your hardware, your
              conversations live in a database on your disk, and there is no server
              to send anything to.
            </p>
            <p className="mt-4 text-[color:var(--fg-dim)] leading-relaxed">
              Network access is not a setting scattered through the code. Every route
              out of the machine passes through a single guard, backed by a
              process-wide socket failsafe &mdash; so a component that tries to go
              online when you have not allowed it does not get a warning, it gets a
              closed door.
            </p>
            <div className="mt-9"><a href={REPO} className="btn btn-ghost">Read the source</a></div>
          </div>
          <div className="card p-8">
            <p className="kicker mb-6">What stays on your machine</p>
            <ul className="space-y-5 text-[.95rem]">
              {[
                ["Your conversations", "A local SQLite database. Never uploaded, never used to train anything."],
                ["The model", "Runs on your own CPU or GPU. Swap it for any GGUF model you like."],
                ["Your voice and screen", "Speech and vision are processed on-device. Nothing is streamed out."],
                ["Your files", "Read only when a task needs them, and only where you allow."],
                ["Your training data", "Fine-tuning runs on your GPU. The dataset never leaves the disk."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3.5">
                  <span aria-hidden className="dot-cyan mt-[.5rem] h-1.5 w-1.5 rounded-full shrink-0" />
                  <span><strong className="font-semibold">{t}</strong>
                    <span className="text-[color:var(--fg-dim)]"> &mdash; {d}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-7 pt-5 border-t border-[color:var(--line)] text-sm text-[color:var(--mut)] leading-relaxed">
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
    <section>
      <hr className="rule-fade" />
      <div className="mx-auto max-w-7xl px-6 py-28">
        <div className="card p-10 sm:p-14 overflow-hidden relative">
          <p className="kicker kicker--bar mb-6">Marketplace</p>
          <h2 className="display text-[2rem] sm:text-4xl max-w-3xl">
            Add tools in a click.<br /><span className="grad">Every one read by a person first.</span>
          </h2>
          <p className="mt-7 text-[color:var(--fg-dim)] max-w-2xl leading-relaxed">
            Plugins and MCP servers built by the community. Each is signed at
            approval, checksummed on download, scanned on your own machine, and has
            to ask you about every capability it wants before it is installed.
            Review raises the floor &mdash; it is not a guarantee, and ELI still asks.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
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
    <section>
      <hr className="rule-fade" />
      <div className="mx-auto max-w-7xl px-6 py-28">
        <p className="kicker kicker--bar mb-6">Specifications</p>
        <h2 className="display text-[2.2rem] sm:text-5xl mb-12">
          Runs on what<br /><span className="grad">you already have.</span>
        </h2>
        <div className="card overflow-hidden">
          <table className="w-full text-[.95rem]">
            <tbody>
              {rows.map(([k, v], i) => (
                <tr key={k} className={i ? "border-t border-[color:var(--line)]" : ""}>
                  <th scope="row" className="text-left align-top font-[family-name:var(--font-geist-mono)] text-[color:var(--accent)] text-xs uppercase tracking-widest p-6 w-[34%] sm:w-[24%]">{k}</th>
                  <td className="p-6 text-[color:var(--fg-dim)]">{v}</td>
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
    <section className="relative overflow-hidden">
      <hr className="rule-fade" />
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <Image src="/eli-icon.png" alt="" width={72} height={72}
               className="rounded-2xl mx-auto mb-10 logo-glow-lg" />
        <h2 className="display text-[2.6rem] sm:text-6xl">
          Run it <span className="grad">yourself.</span>
        </h2>
        <p className="mt-8 text-[color:var(--fg-dim)] max-w-xl mx-auto leading-relaxed">
          One installer for Windows, macOS and Linux. It brings its own voices and
          everything else it needs &mdash; point it at a model and it starts.
        </p>
        <div className="mt-11 flex flex-wrap gap-3 justify-center">
          <a href={RELEASES} className="btn btn-primary">Download the latest release</a>
          <a href={REPO} className="btn btn-ghost">View on GitHub</a>
        </div>
        <p className="mt-9 text-xs text-[color:var(--mut)] font-[family-name:var(--font-geist-mono)] tracking-widest uppercase">
          Windows .exe · macOS .dmg · Linux AppImage
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <hr className="rule-fade" />
      <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm">
        <div className="flex items-center gap-3">
          <Image src="/eli-icon.png" alt="" width={24} height={24} className="rounded logo-glow" />
          <p className="text-[color:var(--mut)]">
            © {new Date().getFullYear()} Jason Fitzgibbon Bridgeman · PolyForm Internal Use
          </p>
        </div>
        <div className="flex gap-7">
          <a href={MARKETPLACE} className="text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">Marketplace</a>
          <a href={REPO} className="text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">GitHub</a>
          <a href={RELEASES} className="text-[color:var(--fg-dim)] hover:text-[color:var(--accent)] transition">Download</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="relative z-0">
      <Nav />
      <Hero />
      <Ticker />
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
