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
    title: 'AI Skills',
    id: 'ai_skills',
    content: (
      <ul>
        <li>Multimodal AI Training</li>
        <li>Data Labeling</li>
        <li>Prompt Engineering </li>
        <li>RLHF</li>
        <li>Evaluation Rubrics</li>
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
            {`
              1+ year experience as an AI Trainer at Alignerr, xAI, and Outliar.ai and promoted to reviewer across 5+ projects. 3+ years Full Stack Software Engineer with multiple projects deployed on Web and Android.

I also built Jade Chinese-English Dictionary, a cross-platform bilingual dictionary and language learning platform that attracted 600+ unique visitors within 30 days of launch and reached 110+ downloads on Android.

Currently seeking AI Training and Software Engineering opportunities.
`}
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
