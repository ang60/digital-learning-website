import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Digital Learning</h2>
            <p className="text-gray-400">Empowering minds, transforming lives.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" text-white hover:text-blue-400 transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className=" text-white hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className=" text-white hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className=" text-white hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                <a href="mailto:Digitallearning@strathmore.edu" className=" text-white hover:text-blue-400 transition-colors">
                  Digitallearning@strathmore.edu
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className=" text-white hover:text-blue-400 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className=" text-white hover:text-blue-400 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className=" text-white hover:text-blue-400 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className=" text-white hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">© 2024 DigitalLearning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

