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
    <article className="flex flex-col items-center rounded-lg flex-shrink-0 space-y-4 w-[350px] h-[auto] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
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
        className="w-20 h-20  rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="hp logo"
      />

      <div className="flex flex-col items-center px-0 md:px-10 ">
        <h4 className="text-2xl md:text-3xl font-light">
          {experience.jobTitle}
        </h4>
        <p className="font-bold text-2xl mt-1 ">{experience.company}</p>
        <div className="flex space-x-5 ">
          {experience.technologies.map((technology) => (
            <motion.img
              initial={{
                x: 200,
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
              key={technology._id}
              className="h-5 w-5 sm:h-8 sm:w-8 rounded-full "
              src={urlFor(technology.image).url()}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).getFullYear()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-sm sm:text-1xl md:text-2xl text-left">
          {experience.points.map((exp, i) => (
            <li key={i}> {exp}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
