export default function Projects() {
  const projects = [
    {
      name: "R-Commons",
      category: "Nonprofit · In Progress",
      description:
        "A platform connecting volunteers and organizations for disaster aid and relief. Built for a nonprofit focused on making coordination faster and more human when it matters most. This is the project I'm most proud of — real stakes, real users, real impact.",
      tags: ["React", "Node.js"],
      github: null,
      demo: null,
      note: "Repository coming soon.",
    },
    {
      name: "WNC Supply Sites",
      category: "Open Source · Contributor",
      description:
        "A live website and database showing where people can donate resources or find supplies during a disaster — connecting organizations and individuals when infrastructure breaks down. I contributed to this real, deployed tool used during active disaster relief efforts.",
      tags: ["Open Source", "Database", "Disaster Relief"],
      github: "https://github.com/wnc-supply-sites/wnc-supply-sites",
      demo: null,
      note: null,
    },
    {
      name: "Dormless",
      category: "Full-Stack · In Progress",
      description:
        "A fully functional web platform for finding sublets and off-campus housing at Boston College. Built with a team for my Software Engineering course — complete with listings, search, and user accounts.",
      tags: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/kaylaimbriale",
      demo: null,
      note: null,
    },
    {
      name: "DCGAN Animal Generator",
      category: "Deep Learning",
      description:
        "A deep convolutional GAN trained on multiple animal datasets, enhanced with class-based conditioning to distinguish animal categories. Used TensorBoard to track training progress and visualize loss trends in real time. Built for my Deep Learning course.",
      tags: ["Python", "PyTorch", "GANs", "TensorBoard"],
      github: "https://github.com/kaylaimbriale/dcgan-animal-generator",
      demo: null,
      note: null,
    },
  ];

  return (
    <main className="bg-blush min-h-screen">

      {/* Header */}
      <section className="bg-white border-b border-petal py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-mauve text-sm font-semibold tracking-widest uppercase mb-3">
            My Work
          </p>
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects.</h1>
          <p className="text-lg text-mauve max-w-xl">
            A mix of coursework, open source contributions, and work I'm doing.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl border border-petal p-8 flex flex-col gap-4 hover:shadow-lg transition"
            >
              {/* Category badge */}
              <span className="text-xs font-semibold uppercase tracking-widest text-mauve bg-petal px-3 py-1 rounded-full w-fit">
                {project.category}
              </span>

              {/* Title */}
              <h2 className="text-xl font-bold text-foreground">{project.name}</h2>

              {/* Description */}
              <p className="text-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-mauve bg-petal px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 items-center mt-auto">
                {project.github && (
                  
                <a href={project.github}
                    className="text-rose text-sm font-semibold hover:underline"
                  >
                    GitHub →
                  </a>
                )}
                {project.demo && (
                  
                <a href={project.demo}
                    className="text-rose text-sm font-semibold hover:underline"
                  >
                    Live Demo →
                  </a>
                )}
                {project.note && (
                  <p className="text-mauve text-xs italic">{project.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}