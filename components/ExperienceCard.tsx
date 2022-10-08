import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};
const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col items-center rounded-lg flex-shrink-0 space-y-7 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="w-32 h-32  rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="hp logo"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Front End Developer</h4>
        <p className="font-bold text-2xl mt-1 ">HP Inc.</p>
        <motion.div
          initial={{
            x: 300,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          className="flex space-x-3 my-2"
        >
          {experience.technologies.map((technology) => (
            <motion.img
              key={technology._id}
              className="h-5 w-5 rounded-full"
              src={urlFor(technology.image).url()}
            />
          ))}
        </motion.div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).getFullYear()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {experience.points.map((exp, i) => (
            <li key={i}> {exp}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;