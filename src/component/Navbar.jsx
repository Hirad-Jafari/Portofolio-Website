import logo from "../assests/logo.jpg"
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa6"
import { FaInstagram } from "react-icons/fa"
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-4 w-10 cursor-pointer" src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
          <FaLinkedin />
          <FaGithub />
          <FaTelegram />
          <FaInstagram />

        </div>
    </nav>
  )
}

export default Navbar