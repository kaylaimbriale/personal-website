export default function Home() {
  return (
    <main className="min-h-screen bg-blush">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <p className="text-mauve text-sm font-semibold tracking-widest uppercase mb-4">
          Computer Science · Boston College · Class of 2026
        </p>
        <h1 className="text-6xl font-bold text-foreground mb-6">
          Kayla Imbriale
        </h1>
        <p className="text-lg text-mauve max-w-xl leading-relaxed mb-10">
          I am passionate about healthcare tech and human-centered design, 
          and I'm looking to make a real-world impact through my work.
        </p>
        <div className="flex gap-4">
          
          <a href="#projects"
            className="bg-rose text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            View My Work
          </a>
          
          <a href="/resume.pdf"
            className="border border-rose text-rose px-7 py-3 rounded-lg font-semibold hover:bg-petal transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Hi, I'm Kayla.</h2>
          <p className="text-lg text-foreground leading-relaxed mb-4">
            I'm a senior at Boston College finishing my B.S. in Computer Science,
            with minors in Finance and Italian. I care deeply about building technology
            that makes a real difference, especially at the intersection of software
            and healthcare.
          </p>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            I'm currently looking for full-time opportunities in software engineering,
            information technology, and network engineering. If you're working on
            something that matters, I'd love to be part of it.
          </p>
          
          <a href="/about"
            className="text-rose font-semibold hover:underline"
          >
            More about me →
          </a>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="bg-blush py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-mauve text-center mb-12">
            A selection of work I'm proud of.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-petal p-8 flex flex-col gap-4 hover:shadow-lg transition">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-mauve bg-petal px-3 py-1 rounded-full">
                  Nonprofit · In Progress
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground">R-Commons</h3>
              <p className="text-foreground leading-relaxed text-sm flex-1">
                A platform connecting volunteers and organizations for disaster aid
                and relief. Built for a nonprofit, designed to make coordination
                faster and more human when it matters most.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js"].map(tag => (
                  <span key={tag} className="text-xs font-semibold text-mauve bg-petal px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-petal p-8 flex flex-col gap-4 hover:shadow-lg transition">
              <span className="text-xs font-semibold uppercase tracking-widest text-mauve bg-petal px-3 py-1 rounded-full w-fit">
                Deep Learning
              </span>
              <h3 className="text-xl font-bold text-foreground">DCGAN Animal Generator</h3>
              <p className="text-foreground leading-relaxed text-sm flex-1">
                A deep convolutional GAN trained on multiple animal datasets to
                generate novel animal images. Built as a group project for my
                Deep Learning course.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "PyTorch", "GANs"].map(tag => (
                  <span key={tag} className="text-xs font-semibold text-mauve bg-petal px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href="https://github.com/kaylaimbriale"
                className="text-rose text-sm font-semibold hover:underline mt-auto"
              >
                GitHub →
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-petal p-8 flex flex-col gap-4 hover:shadow-lg transition">
              <span className="text-xs font-semibold uppercase tracking-widest text-mauve bg-petal px-3 py-1 rounded-full w-fit">
                Full-Stack · In Progress
              </span>
              <h3 className="text-xl font-bold text-foreground">Dormless</h3>
              <p className="text-foreground leading-relaxed text-sm flex-1">
                A fully functional web platform for finding sublets and off-campus
                housing at Boston College. Built with a team for my Software
                Engineering course.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "PostgreSQL"].map(tag => (
                  <span key={tag} className="text-xs font-semibold text-mauve bg-petal px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <a href="https://github.com/kaylaimbriale"
                className="text-rose text-sm font-semibold hover:underline mt-auto"
              >
                GitHub →
              </a>
            </div>

          </div>

          <div className="text-center mt-12">
            
            <a href="/projects"
              className="border border-rose text-rose px-7 py-3 rounded-lg font-semibold hover:bg-petal transition"
            >
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Let's connect.</h2>
          <p className="text-lg text-foreground leading-relaxed mb-8">
            I'm always happy to chat! Whether you're a recruiter, a collaborator,
            or just someone who wants to talk about healthcare tech or something
            you're building, my inbox is open.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            
            <a href="mailto:kayla.imbriale@gmail.com"
              className="bg-rose text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Say Hello
            </a>
            
            <a href="https://linkedin.com/in/kaylaimbriale"
              className="border border-rose text-rose px-7 py-3 rounded-lg font-semibold hover:bg-petal transition"
            >
              LinkedIn
            </a>
            
            <a href="https://github.com/kaylaimbriale"
              className="border border-rose text-rose px-7 py-3 rounded-lg font-semibold hover:bg-petal transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}