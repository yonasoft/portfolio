'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Web Skills',
    id: 'web_skills',
    content: (
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },

  {
    title: 'Mobile Skills',
    id: 'mobile_skills',
    content: (
      <ul>
        <li>Kotlin</li>
        <li>Dart</li>
        <li>Android</li>
        <li>Flutter</li>
        <li>Jetpack Compose</li>
        <li>Retrofit</li>
      </ul>
    ),
  },

  {
    title: 'Other',
    id: 'other_skills',
    content: (
      <ul>
        <li>Firebase</li>
        <li>Git</li>
      </ul>
    ),
  },

  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>Altcademy, Remote - Full Stack Web Development</li>
        <li>Queens College, New York - B.A. General Linguistics</li>
      </ul>
    ),
  },
];

type Props = {};

const AboutSection = (props: Props) => {
  const [tab, setTab] = useState('web_skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className='about text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image
          src='/images/about.jpg'
          width={500}
          height={500}
          alt='image of computer'
        />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg '>
            As a versatile Software Engineer, I thrive on quickly mastering new
            technologies and delivering impactful solutions. With experience
            spanning web development, native Android, and Flutter, I have a
            proven track record of building creative projects. During my
            internship, I developed an innovative Android AI chatbot, and I now
            work as a freelance AI model trainer. I’m currently seeking a
            full-time or part-time Software Engineering role where I can
            contribute my diverse expertise and passion for innovation. I invite
            you to explore my projects or reach out—let’s create something
            exceptional together.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            {TAB_DATA.map((tabData, index) => (
              <TabButton
                key={index}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
