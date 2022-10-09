import React from "react";

import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          y: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        className="-mb-60 md:mb-0 flex-shrink-0 w-56 h-56 md:w-64 md:h-95 md:rounded-lg"
      >
        <motion.img
          className="relative rounded-full h-32 w-32 md:h-[260px] md:w-[200px] mx-auto object-cover"
          src={urlFor(pageInfo?.heroImage).url()}
          alt="Picture of the author"
        />
      </motion.div>
      <div className="space-y-8 px-0 md:px-10">
        {/* <h4 className="text-2xl md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
          background
        </h4> */}
        <p className=" text-sm sm:text-lg">
          Hi I am Harish, an experienced Developer with diversified skills and
          high level of expertise in Front end application development.
          Confident, Self - learner, and quick to grasp new concepts, with a
          skill for proactive, troubleshooting issues, while recommending and
          implementing solutions. Well-versed with software engineering
          practices like Agile, versioning, code quality, release planning and
          CI/CD.
        </p>
        {/* {pageInfo?.backgroundInformation} */}
      </div>
    </motion.div>
  );
};

export default About;
