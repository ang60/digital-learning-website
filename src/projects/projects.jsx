import { useState } from "react"
import { Github, Globe, Gamepad2, Code2, Search, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const projects = [
  {
    title: "AGRA",
    description: "",
    image: "/img/AGRA.jpeg",
    tags: ["AI", "Education", "Machine Learning"],
    link: "#",
  },
  {
    title: "FIPS",
    description: "",
    image: "/img/FIPS.webp",
    tags: ["VR", "3D Modeling", "Unity"],
    link: "#",
  },
  {
    title: "GIZ",
    description: "",
    image: "/img/GIZ.jpeg",
    tags: ["Blockchain", "Cryptography", "Web3"],
    link: "#",
  },
  {
    title: "IJM",
    description: "",
    image: "/img/IJM.jpeg",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Kids Can Code",
    description: "",
    image: "/img/kidscancode.webp",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  }, 
  {
    title: "Master Card",
    description: "",
    image: "/img/mastercard.png",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "UNHRC",
    description: "",
    image: "/img/UNHCR.png",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Refugees",
    description: "",
    image: "/img/refugees.webp",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Mobile Learning",
    description: "",
    image: "/img/mobilelearning.webp",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "ReadyToWork",
    description: "",
    image: "/img/blended.avif",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Capacity Building in ICTS",
    description: "",
    image: "/img/blendedlearning.jpg",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
]

export default function DigitalLearningShowcase() {
  const [filter, setFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter(
    (project) =>
      (filter === "all" || project.type === filter) &&
      (project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))),
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-100">Digital Learning</h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link
                  href="#"
                  className="text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-blue-800 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <div className="max-w-7xl w-full mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-8">Our Projects</h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-4 mb-4 md:mb-0">
            </div>
            <div className="relative">
            </div>
          </div>
          <AnimatePresence>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <div>
              <h3 className="text-2xl font-bold mb-4">Digital Learning</h3>
              <p className="text-blue-200">Advancing education through cutting-edge technology.</p>
            </div> */}
            <div>
              {/* <h4 className="text-lg font-semibold mb-4">Quick Links</h4> */}
              <ul className="space-y-2">
                {/* <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Our Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Research
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
            <div>
              {/* <h4 className="text-lg font-semibold mb-4">Connect With Us</h4> */}
              <div className="flex space-x-4">
                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  <Github className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-200">
                  <Globe className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function HeroSection() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empowering Minds, Transforming lives.
        </motion.h2>

      </div>
    </div>
  )
}

function FilterButton({ children, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-colors duration-200 ${
        active
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      }`}
    >
      {children}
    </button>
  )
}

function ProjectCard({ project }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <img
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">

        </div>
      </div>
      
    </motion.div>
  )
}

