import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary  rounded-[20px] py-5 px-25 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The archive</p>
        <h2 className={styles.sectionHeadText}>Where I began</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Udit Raj — a 25-year-old engineer from Bihar, now based in
        Ahmedabad. I started out with Flutter and Android internships, then went
        deep into full-stack with MERN and Next.js, and on into AI, ML and a
        little DevOps along the way. Today I'm Co-founder &amp; CTO at Commerciax
        Infotech, building neweb.ai.
        <br />
        <br />
        Think of this site as a museum rather than a storefront. Everything here
        is the past — the first projects I ever shipped, however rough, kept
        exactly as they were. They're my roots. My current work lives in the
        workshop at{" "}
        <a
          href="https://uditraj.site"
          target="_blank"
          rel="noreferrer"
          className="text-[#915eff] underline"
        >
          uditraj.site
        </a>
        .
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
