export default function Contact() {
  return (
    <main className="bg-blush min-h-screen">

      {/* Header */}
      <section className="bg-white border-b border-petal py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-mauve text-sm font-semibold tracking-widest uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Let's connect.
          </h1>
          <p className="text-lg text-mauve max-w-xl">
            Whether you're a recruiter, a collaborator, or just someone who wants
            to talk about healthcare tech or something you're building — I'd love
            to hear from you.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-6">

          
          <a href="mailto:kayla.imbriale@gmail.com"
            className="bg-white rounded-2xl border border-petal p-8 flex items-center justify-between hover:shadow-lg hover:border-rose transition group"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve mb-2">
                Email
              </p>
              <p className="text-xl font-bold text-foreground">
                kayla.imbriale@gmail.com
              </p>
            </div>
            <span className="text-rose text-2xl group-hover:translate-x-1 transition">
              →
            </span>
          </a>

          
          <a href="https://linkedin.com/in/kaylaimbriale"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl border border-petal p-8 flex items-center justify-between hover:shadow-lg hover:border-rose transition group"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve mb-2">
                LinkedIn
              </p>
              <p className="text-xl font-bold text-foreground">
                linkedin.com/in/kaylaimbriale
              </p>
            </div>
            <span className="text-rose text-2xl group-hover:translate-x-1 transition">
              →
            </span>
          </a>

          
          <a href="https://github.com/kaylaimbriale"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl border border-petal p-8 flex items-center justify-between hover:shadow-lg hover:border-rose transition group"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-mauve mb-2">
                GitHub
              </p>
              <p className="text-xl font-bold text-foreground">
                github.com/kaylaimbriale
              </p>
            </div>
            <span className="text-rose text-2xl group-hover:translate-x-1 transition">
              →
            </span>
          </a>

        </div>

        {/* Closing note */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-mauve text-lg leading-relaxed">
            I try to respond within 48 hours. Looking forward to talking! 🌸
          </p>
        </div>

      </section>

    </main>
  );
}