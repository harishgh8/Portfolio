import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        className="rounded-full object-cover w-12 h-12 sm:w-28 sm:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      >
        <Image
          src={urlFor(skill.image).url()}
          alt="logo"
          layout="fill"
          objectFit="cover"
        />
      </motion.div>
    </div>
  );
};

export default Skill;
