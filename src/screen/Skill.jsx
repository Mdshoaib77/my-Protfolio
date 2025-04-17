import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skillsData } from "../assets/data/data";

export const Skill = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      className="skills-section"
      id="skills-section"
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="container">
        <div className="section-header text-center">
          <motion.h2
            className="section-title"
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            My Skills
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
          </motion.p>
        </div>

        <div className="skills-widget grid6">
          {skillsData.map((skill, index) => (
            <motion.div
              className="skill-item"
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="skill-inner">
                <div className="icon-box">
                  {/* You can use either icon component or image here */}
                  {typeof skill.icon === "string" ? (
                    <img src={skill.icon} alt={skill.name} />
                  ) : (
                    skill.icon
                  )}
                </div>
                <div className="number">{skill.percentage}%</div>
              </div>
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
