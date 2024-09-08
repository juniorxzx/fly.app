"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

// assets
import Logo from "@/assets/logo.svg";
import SearchIcon from '@/assets/icons/search.svg'
import FlightIcon from '@/assets/icons/flight.svg'
import HotelIcon from '@/assets/icons/hotel.svg'
import QuestionIcon from '@/assets/icons/question.svg'



const Header = () => {
  const [open, setOpen] = useState<boolean>(true);
  const path = usePathname();
  return (
    <motion.header
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="h-screen "
    >
      <motion.aside
        className={`${
          open ? "w-[280px]" : "w-[80px]"
        } flex flex-col h-full shadow-inner-soft relative

      `}
        initial={{ width: open ? "280px" : "80px" }}
        animate={{ width: open ? "280px" : "80px" }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
      >
        <motion.div
          onClick={() => setOpen(!open)}
          className="absolute top-5 -right-2 bg-off-white rounded-lg p-2 flex flex-col w-7 h-7 gap-2"
        >
          <motion.span
            className="w-full h-[2px] bg-dark-gray rounded-lg"
            initial={{ rotateZ: -45, translateY: 1 }}
            animate={{ rotateZ: open ? -45 : 45, translateY: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
          <motion.span
            className="w-full h-[2px] bg-dark-gray rounded-lg"
            initial={{ rotateZ: -45, translateY: -1 }}
            animate={{ rotateZ: open ? 45 : -45, translateY: -1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          />
        </motion.div>
        <motion.div className="flex flex-col container mx-auto py-3 mt-10">
          <motion.div className="flex gap-2 items-center px-6">
            <Image src={Logo} alt="Logo" width={30} />
            {open ? <motion.h1 className="text-lg">Fly.app</motion.h1> : ""}
          </motion.div>
          <motion.div className="mx-6 mt-4 flex items-center border border-off-white rounded-lg pl-1">
            <Image src={SearchIcon} alt="Search" width={20} />
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full bg-transparent "
            />
          </motion.div>
          <motion.div className="flex flex-col gap-2 mt-8 pl-6">
            <span className="text-xs text-light-salmon">Menu</span>
            <motion.nav className="flex flex-col gap-4">
              <motion.div className="flex justify-between items-center">
                <Link
                  href="/"
                  className={`${
                    path === "/" ? "text-primary" : ""
                  } flex items-center gap-2 `}
                >
                  <Image src={FlightIcon} alt="Flight" width={20} />
                  {open ? <span className={``}>Passagens Áereas</span> : ""}
                </Link>
                <motion.div
                  className={`${
                    path === "/" ? "bg-primary h-full w-[2px]" : ""
                  }`}
                />
              </motion.div>
              <motion.div className="flex justify-between items-center">
                <Link
                  href="/"
                  className={`${
                    path === "/hotel" ? "text-primary" : ""
                  } flex items-center gap-2 `}
                >
                  <Image src={HotelIcon} alt="Hotel" width={20} />
                  {open ? <span className={``}>Hotel</span> : ""}
                </Link>
                <motion.div
                  className={`${
                    path === "/hotel" ? "bg-primary h-full w-[2px]" : ""
                  }`}
                />
              </motion.div>
              <motion.div className="flex justify-between items-center">
                <Link
                  href="/"
                  className={`${
                    path === "/about" ? "text-primary" : ""
                  } flex items-center gap-2 `}
                >
                  <Image src={QuestionIcon} alt="About" width={20} />
                  {open ? <span className={``}>Perguntas Freq.</span> : ""}
                </Link>
                <motion.div
                  className={`${
                    path === "/hotel" ? "bg-primary h-full w-[2px]" : ""
                  }`}
                />
              </motion.div>
            </motion.nav>
          </motion.div>
        </motion.div>
      </motion.aside>
    </motion.header>
  );
};

export default Header;
