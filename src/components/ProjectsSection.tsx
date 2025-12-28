'use client';
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectTag from './ProjectTag';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Jade Chinese Dictionary 2 (Android)',
    description:
      "A comprehensive Chinese-English dictionary app with over 121,000 words featuring multiple input methods including handwriting recognition, OCR, and speech-to-text. Includes complete HSK vocabulary lists (levels 1-9) and practice tools like flashcards, multiple-choice quizzes, and listening exercises to enhance retention. Don't just search words; remember them!",
    image: '/images/projects/jade-android-2.jpg',
    gitUrl: 'https://github.com/yonasoft/jade-dictionary-android2',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.yonasoft.jadedictionary',
    tag: ['All', 'Mobile'],
  },

  {
    id: 2,
    title: 'Jade Chinese Dictionary 1 (Android)',
    description:
      'The first iteration of my Android Chinese-English dictionary app with 121,000+ words, featuring word lists and basic practice functionality. This initial version was adapted from the web application and laid the foundation for Jade Dictionary 2. While functional, this original version has been superseded by the more feature-rich current release.',
    image: '/images/projects/jade-android.jpg',
    gitUrl: 'https://github.com/yonasoft/jade-dictionary-android',
    tag: ['All', 'Mobile'],
  },
  {
    id: 3,
    title: 'JadeDictionary.com (Web)',
    description:
      'The original web version of my Chinese-English dictionary with over 121,000 words, featuring vocabulary lists and practice tools to enhance retention. Includes built-in Chinese keyboard and handwriting input for seamless user experience. While fully functional, this is an earlier iteration - a completely revamped version with expanded features is currently in development.',
    image: '/images/projects/jade-web.png',
    gitUrl: 'https://github.com/yonasoft/jade-dictionary-web',
    previewUrl: 'https://jadedictionary.com/',
    tag: ['All', 'Mobile'],
  },
  {
    id: 4,
    title: 'miniMAL',
    description:
      'A streamlined Android app providing information on over 80,000 Anime and Manga titles. Features include comprehensive search functionality, detailed title information, seasonal browsing, and popularity rankings. This app delivers the core functionality of MyAnimeList in a lightweight, mobile-optimized experience. I plan to update this with a refreshed UI and additional features in the near future.',
    image: '/images/projects/minimal.jpg',
    gitUrl: 'https://github.com/yonasoft/miniMAL',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.yonasoft.minimal',
    tag: ['All', 'Mobile'],
  },

  {
    id: 5,
    title: 'Handball Court Manager (Android)',
    description:
      'A specialized Android app solving a common problem for handball players by digitizing court queue management. Features include player check-in, match tracking, automated queue progression, and historical match data. This app transforms the traditional whiteboard system into a streamlined digital experience for community courts. An updated version with enhanced UI and additional statistical features is currently in development.',
    image: '/images/projects/handball.png',
    gitUrl: 'https://github.com/yonasoft/Wall-Handball-Court-Manager',
    previewUrl:
      'https://play.google.com/store/apps/details?id=com.yonasoft.handballcourtmanager',
    tag: ['All', 'Mobile'],
  },

  {
    id: 6,
    title: 'AniTier',
    description:
      'An interactive web platform for creating, sharing, and rating tier lists of Anime and Manga, drawing from a database of over 110,000 titles. Users can import their MyAnimeList or AniList watchlists, create personalized tier rankings, and participate in community voting. This project combines database integration, user authentication, and dynamic UI elements for a complete social experience.',
    image: '/images/projects/anitier.png',
    gitUrl: 'https://github.com/yonasoft/AniTier',
    tag: ['All', 'Web'],
  },
];

type Props = {};

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
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
    <section id='projects' ref={ref}>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
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
