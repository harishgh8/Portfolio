import React from "react";
import Skill from "./Skill";
import { motion } from "framer-motion";
import { Skill as SkillType } from "../typings";

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex relative flex-col md:text-left text-center  xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm">
        this is my tech stack
      </h3>
      <div className="grid grid-cols-3 gap-5">
        {skills?.slice(0, skills.length / 2).map((skill, i) => (
          <Skill key={i} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill, i) => (
          <Skill key={i} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
