export default function Home() {
  return (
    <main className="min-h-screen bg-blush">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        
        {/* Eyebrow text */}
        <p className="text-mauve text-sm font-semibold tracking-widest uppercase mb-4">
          Computer Science · Graduating 2026
        </p>

        {/* Your name */}
        <h1 className="text-6xl font-bold text-foreground mb-6">
          Kayla Imbriale
        </h1>

        {/* Short description */}
        <p className="text-lg text-mauve max-w-xl mb-10">
          I am passionate about healthcare tech and human-centered design, 
          and I'm looking to make a real-world impact through my work.
        </p>

        {/* Buttons */}
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

    </main>
  );
}