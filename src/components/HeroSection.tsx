"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { IoBrowsers, IoLogoAndroid } from "react-icons/io5";
import Link from "next/link";

const HeroSection = () => {
  const [showResumeOptions, setShowResumeOptions] = useState(false);
  const [isPending, startTransition] = useTransition();
  const onHover = (isShow: boolean) => {
    startTransition(() => {
      setShowResumeOptions(isShow);
    });
  };
  const resumeOptionsVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      height: "auto", // Adjust as needed, or use specific height
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 w-full place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white max-w-2xl mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Kevin Chen",
                1000,
                "Android Developer",
                1000,
                "Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl"></p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
            <div className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
              <motion.button
                // onMouseEnter={() => onHover(true)}
                // onMouseLeave={() => onHover(false)}
                className="block w-full bg-[#121212] hover:bg-slate-800 rounded-full px-6 py-2"
              >
                <Link
                  href="https://www.dropbox.com/scl/fi/fnoanl0k8zcsevkhyua4u/Kevin_Chen_Resume.pdf?rlkey=dejeblkagj4i82sqrkemh3npp&dl=1"
                  target="_blank"
                >
                  Download Resume
                </Link>
                {/* {showResumeOptions && (
                  <motion.div
                    variants={resumeOptionsVariants}
                    initial="hidden"
                    animate={showResumeOptions ? "visible" : "hidden"}
                    className="flex flex-row justify-around"
                  >
                    <Link
                      href="https://www.dropbox.com/scl/fi/ru3lenlw4kdn21m4yy2zk/Kevin_Chen_Resume.pdf?rlkey=gz1ckc0i8n1uqs0komz73hhd8&dl=1"
                      target="_blank"
                      className="border-2 p-1 my-2 rounded-md hover:bg-slate-400"
                    >
                      <IoLogoAndroid size={24} />
                    </Link>
                    <Link
                      href="https://www.dropbox.com/scl/fi/9jr2zggh8y1fuykxv2fsq/Kevin_Chen_Resume.pdf?rlkey=snxzlys3176vkrmqmnuuygq3p&dl=1"
                      target="_blank"
                      className="border-2 p-1 my-2 rounded-md hover:bg-slate-400"
                    >
                      <IoBrowsers size={24} />
                    </Link>
                  </motion.div>
                )} */}
              </motion.button>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full object-cover overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[375px] lg:h-[375px] relative">
            <Image
              src="/images/kevin_chen.png"
              alt="hero image"
              className="absolute transform"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
