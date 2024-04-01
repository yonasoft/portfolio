"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectTag from "./ProjectTag";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Jade Chinese Dictionary (Android)",
    description:
      "An Android Chinese English dictionary application with over 121,000 words, featuring listing and practice functionality to assist with vocabulary retention. Adapted from the web version including all key features.",
    image: "/images/projects/jade-android.jpg",
    gitUrl: "https://github.com/yonasoft/jade-dictionary-android",
    tag: ["All", "Mobile"],
  },
  {
    id: 2,
    title: "JadeDictionary.com (Web)",
    description:
      "A web Chinese English dictionary application with over 121,000 words, with listing and practice functionality to assist with vocabulary retention. Also features built-in Chinese keyboard and handwriting input for user convenience.",
    image: "/images/projects/jade-web.png",
    gitUrl: "https://github.com/yonasoft/jade-dictionary-web",
    previewUrl: "https://jadedictionary.com/",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "miniMAL",
    description:
      "An Android application that provides information on over 80,000 Anime and Manga titles. Users can search for titles, view details, rankings, and sort by season.",
    image: "/images/projects/minimal.jpg",
    gitUrl: "https://github.com/yonasoft/miniMAL",
    tag: ["All", "Mobile"],
  },
  {
    id: 4,
    title: "AniTier.com",
    description:
      "A web application for ranking Anime and Manga titles from a library of over 110,000 titles and import from user lists of over 6 million users. You can also share and upvote/downvote lists.",
    image: "/images/projects/anitier.png",
    gitUrl: "https://github.com/yonasoft/AniTier",
    previewUrl: "https://www.anitier.com/",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Handball Court Manager",
    description:
      "An Android application for handball players to digitally manage and track handball court queues and match data.",
    image: "/images/projects/handball.png",
    gitUrl: "https://github.com/yonasoft/Wall-Handball-Court-Manager",
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.yonasoft.handballcourtmanager",
    tag: ["All", "Mobile"],
  },
];

type Props = {};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
