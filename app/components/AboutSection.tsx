"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-4 gap-4">
        <li>Graphic Design</li>
        <li>Merchandise Design</li>
        <li>vector Illustration</li>
        <li>Digital Painting</li>
        <li>Photo Manipulation</li>
        <li>Adobe Photoshop</li>
        <li>Adobe Illustrator</li>
        <li>Clip Studio Paint</li>
        <li>Adobe After effects</li>
        <li>Guitar</li>
        <li>Python</li>
        <li>Adobe Fresco</li>
        <li>Procreate</li>
        <li>Adobe InDesign</li>
        <li>Aseprite</li>
        <li>Brand/Identity Design</li>
      </ul>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li>Bachelor(in Progress)&apos;s Statistics - University of Texas Rio Grande Valley</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Entreprenurship Industry Certification - Nikki Rowe High School</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: any) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/IMG_0132.jpg" width={500} height={500} alt="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Hello! My name is Anthony Barrera and I am a creative, My interests range from Graphic Design to 
            programming, and art. Over the years I have gained professional level knowledge for the Adobe Creative Cloud suit of products
            and have honed my skills working on various Identity and Branding Projects. I also have a background in traditional art
            a background that has helped me develope an expressive design language.

            I also have a passion for mathematics and technology, this passion and my creative background have nurtured a curiosity
            for programming. I have a deep interest for machine learning and back end developement.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;