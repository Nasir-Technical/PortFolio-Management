import ProjectCard from "./project-card";

const projects = [
  {
    name: "Corporate Website",
    description:
      "A modern corporate website designed to improve the company's digital presence and user experience.",
    client: "Acme Corporation",
    status: "Completed" as const,
    category: "Web Development",
    progress: 100,
  },
  {
    name: "Mobile Banking App",
    description:
      "A secure and intuitive mobile banking experience with account management and payment features.",
    client: "FinTech Ltd.",
    status: "In Progress" as const,
    category: "Mobile App",
    progress: 72,
  },
  {
    name: "E-commerce Platform",
    description:
      "An online shopping platform with product management, checkout and order tracking.",
    client: "ShopHub",
    status: "In Progress" as const,
    category: "E-commerce",
    progress: 48,
  },
  {
    name: "Brand Identity",
    description:
      "A complete visual identity system including logo, typography and brand guidelines.",
    client: "Creative Studio",
    status: "Completed" as const,
    category: "Branding",
    progress: 100,
  },
  {
    name: "SaaS Dashboard",
    description:
      "A data-rich dashboard for monitoring business metrics, users and system activity.",
    client: "CloudWorks",
    status: "Planning" as const,
    category: "Web Application",
    progress: 20,
  },
  {
    name: "Marketing Website",
    description:
      "A conversion-focused marketing website built for a growing technology company.",
    client: "TechStart",
    status: "Planning" as const,
    category: "Marketing",
    progress: 10,
  },
];

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
}
