import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { git, github } from "../assets";
import { projects } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-3xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-2xl object-cover"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover ">
            <div
              onClick={() => window.open(source_code_link, "blank")}
              className="black-gradient h-8 w-8 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-2/3 h-2/3 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="text-secondary mt-2 text-[14px]">{description}</p>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>My Work</p>
        <h2 className={`${styles.heroHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demo in it. It reflects my ability
          to solve complex problems, work with different technologies, and
          manage project effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
