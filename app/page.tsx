export default function Home() {
  return (
    <div className="flex flex-col gap-6 py-10 max-w-3xl">
      {/* Badge */}
      <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border bg-muted/50 text-sm font-semibold text-primary">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        India&apos;s #1 Exam Preparation Platform
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-foreground">
        Welcome to <br />
        <span className="text-primary">Next-Ranker</span>
      </h1>

      {/* Subtext */}
      <p className="text-lg font-medium text-muted-foreground leading-relaxed max-w-xl">
        Select an exam below to kickstart your preparation. Practice smarter with AI-powered mock tests, real-time rankings, and curated study paths.
      </p>

      {/* CTA row */}
      <div className="flex items-center gap-4 mt-2">
        <a
          href="/tests"
          className="px-6 py-3 rounded-full text-sm font-bold bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300"
        >
          Browse Tests →
        </a>
        <a
          href="/leaderboard"
          className="px-6 py-3 rounded-full text-sm font-bold border border-input text-foreground hover:bg-accent transition-all duration-300"
        >
          View Leaderboard
        </a>
      </div>

      {/* Stats row */}
      <div className="flex gap-8 mt-6 pt-6 border-t">
        {[
          { value: "50K+", label: "Students" },
          { value: "200+", label: "Mock Tests" },
          { value: "15+", label: "Exam Categories" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col gap-0.5">
            <span className="text-2xl font-extrabold text-foreground">
              {stat.value}
            </span>
            <span className="text-sm text-muted-foreground font-medium">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
