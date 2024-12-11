import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className="w-screen overflow-hidden">
      <footer className="relative left-0 bottom-0 h-[20vh] md:h-[14vh] py-5 flex flex-col sm:flex-row items-center justify-between text-gray-100 bg-gray-800 sm:px-20">
      <section>
        Copyright 2024 | All rights reserved
      </section>
      <section className="flex gap-5 items-center justify-center">
        <Link className="text-xl hover:text-yellow-700 transition-all ease-in-out duration-300">
          <FaFacebook/>
        </Link>
        <Link className="text-xl hover:text-yellow-700 transition-all ease-in-out duration-300">
          <FaLinkedin/>
        </Link>
        <Link className="text-xl hover:text-yellow-700 transition-all ease-in-out duration-300">
          <FaInstagram/>
        </Link>
        <Link className="text-xl hover:text-yellow-700 transition-all ease-in-out duration-300">
          <FaXTwitter/>
        </Link>
      </section>
    </footer>
    </div>
  )
}

export default Footer