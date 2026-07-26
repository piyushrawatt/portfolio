import { useState } from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Mini Trello",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description:
      "Trello application where you can add delete update your task.",
    category: "Full Stack",
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/piyushrawatt/MINI-TRELLO",
    demo: "https://mini-trello-ten.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio",
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description: "Showcase my skill ",
    category: "MERN",
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/piyushrawatt/portfolio",
    demo: "https://myportfolio-iota-one-10.vercel.app/",
  },

  {
    id: 3,
    title: "E-Commerce",
 image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description: "Complete shopping platform with Stripe integration.",
    category: "Full Stack",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/piyushrawatt/E-commerce-website",
    demo: "https://e-commerce-website-jp77-git-main-piyushrawatts-projects.vercel.app/",
  },
    {
    id: 4,
    title: "counting",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description: "counting app with increment and decrement feature.",
    category: "React",
    tech: ["React"],
    github: "https://github.com/piyushrawatt/countingweb",
    demo: "https://countingweb-g30xzg1dh-piyushrawatts-projects.vercel.app/",
  },
   {
    id: 5,
    title: "todo",
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description: "counting app with increment and decrement feature.",
    category: "JavaScript",
    tech: ["JavaScript"],
    github: "https://github.com/piyushrawatt/Todo-List",
    demo: "https://todo-list-65ut9wkwm-piyushrawatts-projects.vercel.app/",
  },
  {
    id: 6,
    title: "Pass-Generator",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900",
    description: "",
    category: "React",
    tech: ["React"],
    github: "https://github.com/piyushrawatt/passgenerator",
    demo: "https://vercel.com/piyushrawatts-projects/passgenerator/deployments",
  },
];

const filters = ["All", "React", "MERN", "AI", "Full Stack"];

export default function AllProjects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "All" || project.category === activeFilter;

    const matchesSearch = project.title
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-14">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 mb-8"
        >
          ← Back
        </Link>

        <h1 className="text-5xl font-bold text-center">
          All <span className="text-blue-500">Projects</span>
        </h1>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore all of my frontend, backend and full-stack projects.
        </p>

        {/* Search */}
        <div className="max-w-xl mx-auto mt-10">
          <input
            type="text"
            placeholder="🔍 Search Projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#10172d] border border-gray-700 rounded-full px-5 py-3 outline-none focus:border-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mt-8">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`px-5 py-2 rounded-full transition ${
                activeFilter === item
                  ? "bg-blue-600"
                  : "bg-[#111827] hover:bg-[#1b2440]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111827] rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300 border border-transparent hover:border-blue-500"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>

                <p className="text-gray-400 mt-3 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400"
                  >
                    💻 GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-400"
                  >
                    🌐 Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold">
            Let's Build Something Amazing
          </h2>

          <p className="mt-4 text-blue-100">
            Have an idea? I'd love to work with you.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}