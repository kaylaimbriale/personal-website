export default function About() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "C", "SQL", "Go", "Verilog"] },
    { category: "Frameworks & Libraries", items: ["React", "Next.js", "Node.js", "TensorFlow", "Pandas", "Django", "Tkinter"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "PostgreSQL", "Excel", "TensorBoard"] },
    { category: "Currently Learning", items: ["TypeScript", "Tailwind CSS"] },
  ];

  return (
    <main className="bg-blush min-h-screen">

      {/* Hero */}
      <section className="bg-white py-24 px-6 border-b border-petal">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">

          {/* Photo placeholder */}
          <div className="w-56 h-56 rounded-2xl bg-petal flex-shrink-0 flex items-center justify-center border border-rose/20">
            <span className="text-mauve text-sm">Photo coming soon</span>
          </div>

          {/* Intro text */}
          <div>
            <p className="text-mauve text-sm font-semibold tracking-widest uppercase mb-3">
              About Me
            </p>
            <h1 className="text-4xl font-bold text-foreground mb-6">
              Hi, I'm Kayla.
            </h1>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              I'm a senior at Boston College studying Computer Science, with minors
              in Finance and Italian. I graduate in May 2026 and I'm currently looking
              for full-time opportunities in software engineering, information technology,
              and network engineering.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              I care about building technology that has a direct, visible impact on
              real people — not just shipping features, but knowing that what I built
              actually made someone's life a little better.
            </p>
          </div>
        </div>
      </section>

      {/* Why I Care */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Why healthcare tech.</h2>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            It's personal. I've watched family members navigate neurodegenerative diseases,
            genetic illnesses, and mental health struggles — and what strikes me every time
            is how completely health shapes the way you live, and how you're able to show up
            for the people you love. We take it for granted until we can't.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-6">
            That's what draws me to this space. I want to work on problems that matter
            at a human level. I couldn't do work without knowing how it's actually affecting
            someone on the other end. If I can help even one person live a more fulfilling
            life through something I've built, that would mean everything to me.
          </p>
          <p className="text-lg text-foreground leading-relaxed">
            My time as a Direct Support Professional — providing care to an individual
            with autism — and my research work at the University of Parma's Neuroscience
            Department both deepened that conviction. Technology is most powerful when
            it's built by people who understand what's actually at stake.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-white py-24 px-6 border-y border-petal">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Experience.</h2>

          <div className="flex flex-col gap-10">

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-40 flex-shrink-0">
                <p className="text-mauve text-sm font-semibold">Spring 2025</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Research & Academic Assistant</h3>
                <p className="text-mauve text-sm mb-3">Department of Neuroscience, University of Parma · Parma, Italy</p>
                <p className="text-foreground leading-relaxed text-sm">
                  Supported PhD students and faculty with psychological assessment scoring
                  related to workplace stress and burnout. Translated research materials
                  between Italian and English, and organized psychological test data
                  contributing to ongoing academic research.
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-petal" />

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-40 flex-shrink-0">
                <p className="text-mauve text-sm font-semibold">2024 – 2025</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Direct Support Professional</h3>
                <p className="text-mauve text-sm mb-3">PCG Public Partnerships · Montvale, NJ</p>
                <p className="text-foreground leading-relaxed text-sm">
                  Provided dedicated personal care and support to an individual with autism,
                  ensuring a safe, comfortable, and enriching environment through daily
                  living assistance and recreational activities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12">Skills & Tools.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skills.map(group => (
              <div key={group.category}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-mauve mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span
                      key={skill}
                      className="text-sm font-medium text-mauve bg-petal px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal */}
      <section className="bg-white py-24 px-6 border-t border-petal">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Outside of code.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-foreground leading-relaxed">
            <p>
              My dad's side of the family is fully Italian and I grew up proud of that
              culture and those traditions. Studying abroad in Parma last spring was
              one of the best decisions I've ever made — I traveled to 14 countries total,
              which might genuinely be more than the number of US states I've visited.
            </p>
            <p>
              I've been learning Italian since middle school and love it enough that
              I picked up a minor. Languages, travel, food, and new people are things
              I genuinely collect. I think human connection is one of the most
              beautiful things there is.
            </p>
            <p>
              I played tennis for all four years of high school and still love it.
              My competitive side also comes out over ping pong and jigsaw puzzles —
              I can lose hours to a good puzzle. Crosswords and sudoku too.
            </p>
            <p>
              I sang in my high school's auditioned choir and still think there's
              nothing quite as therapeutic as singing. I also play piano and guitar,
              though my dog Kloe — an English Cream Goldendoodle — is less impressed
              by my performances than I'd like.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}