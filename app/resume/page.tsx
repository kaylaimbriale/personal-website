export default function Resume() {
  return (
    <main className="bg-blush min-h-screen">

      {/* Header */}
      <section className="bg-white border-b border-petal py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-mauve text-sm font-semibold tracking-widest uppercase mb-3">
              My Resume
            </p>
            <h1 className="text-4xl font-bold text-foreground">Resume.</h1>
          </div>
          
        <a href="/resume.pdf"
            download
            className="bg-rose text-white px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition flex-shrink-0"
          >
            Download PDF
          </a>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl border border-petal overflow-hidden shadow-sm">
            <iframe
              src="/resume.pdf"
              className="w-full"
              style={{ height: "900px" }}
              title="Kayla Imbriale Resume"
            />
          </div>
          <p className="text-mauve text-sm text-center mt-6">
            Not loading?{" "}
            <a href="/resume.pdf" className="text-rose hover:underline font-medium">
              Open directly →
            </a>
          </p>
        </div>
      </section>

    </main>
  );
}