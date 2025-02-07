import { useState } from "react"
import { Github, Globe, Gamepad2, Code2, Search, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { BentoGridThirdDemo } from "./grid"
import Footer from "../components/Footer"

const projects = [
  {
    title: "AGRA",
    description: "The Digital Learning Unit is developing for AGRA animated videos for use in training of farmers across Africa on good agronomic practices of different crops.The animations will be a mix of 2D and 3D animations, which will be produced primarily in English and then translated into languages spoken throughout Africa such as Kiswahili, French and Portuguese.",
    image: "/img/AGRA.jpeg",
    tags: ["AI", "Education", "Machine Learning"],
    link: "#",
  },
  {
    title: "FIPS",
    description: "The Digital Learning Unit was awarded another consultancy contract where we would develop animated instructional videos for use in educating farmers on good farming practices.The animations will also be used by people who train farmers such as FIPS staff, County Extension Officers and people selling inputs related to the technologies (service providers or agro-dealers).",
    image: "/img/FIPS.webp",
    tags: ["VR", "3D Modeling", "Unity"],
    link: "#",
  },
  {
    title: "GIZ",
    description: "GIZ Nairobi Office awarded the Digital Learning Unit a consultancy contract to develop web-based tools for blended learning under the Access and Benefit Sharing (ABS) Capacity Development Initiative.The aim is to extend the current face-to-face course into a blended learning course, combining both online and offline phases.",
    image: "/img/GIZ.jpeg",
    tags: ["Blockchain", "Cryptography", "Web3"],
    link: "#",
  },
  {
    title: "IJM/ODPP",
    description: "IJMK and ODPP sought to develop a Learning Management System (LMS) that can deliver interactive e-learning capabilities, assessment features, and intuitive analytics on the use of the platform.The goal of this project was to develop a web-based software platform that will provide an interactive online learning environment and automate the administration, organization, delivery, and reporting of knowledge content and learner outcomes and measurement for the Office of the Director of Public Prosecution.",
    image: "/img/IJM.jpeg",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Kids Can Code",
    description: "This project seeks to promote access to quality education and skill development for the remote and underserved locations. It is being undertaken in partnership with wiLearn 4 Life. Provision of quality content is achieved by providing digital libraries loaded with Open Educational Resources (OER). Learning content can be continuously updated on the adaptable server and adapted to the local requirements so that the skills acquired better correspond to the societal needs and future professional needs. Free access to various contents without additional costs should enable learning for everyone.",
    image: "/img/kidscancode.webp",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  }, 
  {
    title: "Master Card",
    description: "The MasterCard Foundation partnered with @iLabAfrica to design and create an extensive interactive portal to disseminate information on the current state of the EdTech ecosystem in Africa.The project had two key delivarables, Ed-Tech System Development and Content Collation and Curation. Ed-Tech System Development involved the design, creation, and implementation of the Ed-Tech platform ",
    image: "/img/mastercard.png",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "UNHRC",
    description: "UNHCR sought to establish a web-based EMIS with the aim of providing transparent, accurate, quality, and accessible education data, information, and indicators for use by all stakeholders in support of greater transparency and coordination, and strengthened planning in education services, with a particular focus on maintaining individual student information",
    image: "/img/UNHCR.png",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Suistainable and Affordable Access to Education for Refugees",
    description: "This Project was undertaken in partnership with UNHCR and WTK. The classes are delivered online in real time. Lecturers traveled to Kakuma for one on one revision.The project kicked off in June 2016 and the first lot of students (18) sat the November 2016 KASNEB Exams.The team to set up a computer Lab at Kakuma Refugee Camp and pursued the accreditation of Windle Trust CPA Centre – as a KASNEB Examination Centre.",
    image: "/img/refugees.webp",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Mobile Learning",
    description: "This collaboration with Castalia Co. Ltd Japan. We carried out a pilot on a mobile learning platform created by Castalia at Strathmore University for MSc. MTI and MSc. ISS programme with content developed by @iLabAfrica.",
    image: "/img/mobilelearning.webp",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "ReadyToWork",
    description: "As young people set out to find employment or create self-employment they need skills that will help them to transition from the world of education into the world of work.@iLabAfrica Digital Learning unit has partnered with Barclays Bank to train young people on Work, People, Money and Entrepreneurial skills needed to improve employment or self-employment prospects through ReadyToWork initiative.",
    image: "/img/blended.avif",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Capacity Building in ICTS",
    description: "The team trained SOA lecturers undertaking the Kakuma Refugees project on the online teaching platforms and digitizer for screen annotations. Twenty-four (24) CPA students at Kakuma registered and were trained on the online platforms and basic ICT skills to enable them to attend the online classes.Strathmore University lecturers and various @iLabAfrica staff handling @iLabAfrica academic programs were trained on online teaching platforms.",
    image: "/img/blendedlearning.jpg",
    tags: ["AR", "Science Education", "Mobile Development"],
    link: "#",
  },
  {
    title: "Smart Learning Communities",
    description: "The MasterCard Foundation partnered with @iLabAfrica to design and create an extensive interactive portal to disseminate information on the current state of the EdTech ecosystem in Africa. The platform will provide relevant and up-to-date information relating to how to develop and implement educational technology and will be used by different stakeholders such as the government, development organizations, entrepreneurs, innovators, and the third sector.",
    image: "/img/kidscancode.webp",
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
          <h2 className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-4">Our Projects</h2>


          <AnimatePresence>
            {/* <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </motion.div> */}
            <BentoGridThirdDemo/>
          </AnimatePresence>
        </div>
      </main>

  <Footer/>
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





