'use client';
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Mobile Skills',
    id: 'mobile_skills',
    content: (
      <ul>
        <li>Kotlin</li>
        <li>Jetpack Compose</li>
        <li>Koin</li>
        <li>Dagger-Hilt</li>
        <li>Room DB</li>
        <li>Retrofit</li>
      </ul>
    ),
  },

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
    title: 'Other',
    id: 'other_skills',
    content: (
      <ul>
        <li>Firebase</li>
        <li>Git</li>
        <li>Data Structures and Algorithms</li>
        <li>Dart & Flutter</li>
      </ul>
    ),
  },

  {
    title: 'Education',
    id: 'education',
    content: (
      <ul>
        <li>Queens College, New York - B.A. General Linguistics</li>
      </ul>
    ),
  },
];

type Props = {};

const AboutSection = (props: Props) => {
  const [tab, setTab] = useState('mobile_skills');
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
            {
              "Software Engineer specializing in Android development with complementary expertise in web technologies and Flutter. I build projects that blend code with my personal interests, constantly refining my skills and improving my applications. My flagship project is a comprehensive Chinese dictionary app that I've enhanced with practice features and multiple input methods. As the lead Android developer during an internship, I spearheaded the development of an AI chat application from concept to completion. My web development foundation comes from Altcademy bootcamp, where I created several projects including a web version of my dictionary app which I plan to update. I'm a versatile developer who adapts quickly to new technologies and thrives on continuous learning."
            }
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
