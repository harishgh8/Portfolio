import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};
const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col items-center rounded-lg flex-shrink-0 space-y-4 w-[350px] h-[auto] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
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
        className="w-20 h-20  rounded-full sm:w-[100px] sm:h-[100px]  xl:w-[150px] xl:h-[150px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt="hp logo"
      />

      <div className=" flex flex-col items-center px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl  font-light">
          {experience.jobTitle}
        </h4>

        <p className="font-bold text-2xl mt-1">{experience.company}</p>
        <p className="uppercase mt-1text-2xl mt-1  text-gray-300">
          {new Date(experience.dateStarted).getFullYear()}
        </p>
        <div className="flex space-x-3 justify-between">
          {experience.technologies.map((technology) => (
            <div
              key={technology._id}
              className="flex flex- row space-x-3 my-2 items-center  justify-between"
            >
              <Image
                key={technology._id}
                width={25}
                height={25}
                src={urlFor(technology.image).url()}
                alt=""
              />
            </div>
          ))}
        </div>
        <ul className="list-disc space-y-4 ml-5 text-sm  text-left">
          {experience.points.map((exp, i) => (
            <li key={i}> {exp}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
