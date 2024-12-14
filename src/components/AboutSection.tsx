"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Web Skills",
    id: "web_skills",
    content: (
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Ruby on Rails</li>
        <li>Tailwind</li>
        <li>Bootstrap</li>
        <li>HTML/CSS</li>
      </ul>
    ),
  },
  {
    title: "Mobile Skills",
    id: "android_skills",
    content: (
      <ul>
        <li>Kotlin</li>
        <li>XML</li>
        <li>Jetpack Compose</li>
        <li>RoomDB</li>
        <li>Retrofit</li>
        <li>Dagger-Hilt</li>
        <li>Gson</li>
        <li>Coroutines</li>
        <li>Coil</li>
      </ul>
    ),
  },

  {
    title: "Education",
    id: "education",
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
  const [tab, setTab] = useState("web_skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (tab: string) => {
    startTransition(() => {
      setTab(tab);
    });
  };

  return (
    <section className="about text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about.jpg"
          width={500}
          height={500}
          alt="image of computer"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg ">
            I am an Android developer
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
