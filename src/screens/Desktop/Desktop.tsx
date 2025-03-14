import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const Desktop = (): JSX.Element => {
  // Navigation items data
  const navItems = ["Home", "Portfolio", "About Me", "Contact"];

  // Programming languages data
  const programmingLanguages = [
    { name: "C++", src: "public/c---1.png" },
    { name: "Java", src: "public/java-1.png" },
    { name: "C#", src: "public/c--1.png" },
    { name: "HTML", src: "public/html-1.png" },
    { name: "CSS", src: "public/css-1.png" },
    { name: "JavaScript", src: "public/javascript-1.png" },
  ];

  // Projects data
  const projects = [
    {
      title: "AboutMeDeployed",
      imageSrc: "public/image-4.png",
      imageAlt: "AboutMeDeployed project screenshot",
    },
    {
      title: "MarkDown",
      imageSrc: "public/image-1.png",
      imageAlt: "MarkDown project screenshot",
    },
  ];

  return (
    <div className="bg-[#e1e2ef] flex flex-row justify-center w-full">
      <div className="bg-[#e1e2ef] w-full max-w-[1366px] relative">
        {/* Header */}
        <header className="w-full h-[100px] [background:linear-gradient(180deg,rgb(191,172,170)_0%,rgb(89,80.15,79.21)_100%)] flex items-center px-10">
          <img
            className="w-[60px] h-[60px] object-cover mr-2"
            alt="Professional logo"
            src="public/professional-logo-1-1.png"
          />
          <h1 className="text-[40px] font-normal text-black [font-family:'Open_Sans',Helvetica]">
            Parjad
          </h1>

          <nav className="flex items-center gap-[27px] ml-auto">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-[53px] text-[40px] font-normal text-black [font-family:'Open_Sans',Helvetica]"
              >
                {item}
              </Button>
            ))}
          </nav>
        </header>

        <main className="px-[116px] py-[53px] space-y-12">
          {/* Hero Section */}
          <Card className="w-full h-[444px] rounded-[25px] overflow-hidden border-none [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)] relative">
            <CardContent className="p-0 flex h-full">
              <div className="p-16 flex flex-col items-start">
                <h2 className="w-[539px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[32px] text-center mb-16">
                  Hi, I&apos;m a Web Developer.
                  <br />
                  My Name Is Parjad Minooei and Welcome to my Portfolio website!
                </h2>

                <div className="flex gap-8">
                  <Button className="w-[175px] h-[60px] bg-[#b497d6] rounded-[50px] text-xl text-[#02020a] [font-family:'Arial-Regular',Helvetica]">
                    Download CV
                  </Button>

                  <Button className="w-[175px] h-[60px] bg-[#b497d6] rounded-[50px] text-xl text-[#02020a] [font-family:'Arial-Regular',Helvetica]">
                    Contact me
                  </Button>
                </div>

                <div className="flex gap-8 mt-8">
                  <div className="w-[46px] h-[46px] relative">
                    <div className="relative w-[34px] h-[37px] top-[5px] left-[5px]">
                      <img
                        className="w-[29px] h-9 top-px absolute left-1"
                        alt="Vector"
                        src="public/vector.svg"
                      />
                      <img
                        className="absolute w-[34px] h-9 top-0 left-0"
                        alt="Group"
                        src="public/group.png"
                      />
                    </div>
                  </div>

                  <div className="w-[46px] h-[46px] relative">
                    <img
                      className="w-2 h-2 top-1 absolute left-1"
                      alt="Vector"
                      src="public/vector-1.svg"
                    />
                    <img
                      className="absolute w-[35px] h-[23px] top-[17px] left-1.5"
                      alt="Group"
                      src="public/group-1.png"
                    />
                  </div>
                </div>
              </div>

              <img
                className="w-[262px] h-[393px] object-cover self-center ml-auto mr-16"
                alt="Parjad profile"
                src="public/parjadfinal2-19-2.png"
              />
            </CardContent>
          </Card>

          {/* Projects Section */}
          <Card className="w-full h-[79px] rounded-[25px] overflow-hidden border-none [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]">
            <CardContent className="flex items-center justify-center h-full p-0">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-white text-5xl text-center">
                Project
              </h2>
            </CardContent>
          </Card>

          {/* CodeQuest Project */}
          <Card className="w-full h-[259px] rounded-[50px] overflow-hidden border-none [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]">
            <CardContent className="p-0 flex items-center h-full">
              <div className="pl-10">
                <h3 className="w-[353px] [font-family:'Montserrat',Helvetica] font-normal text-white text-[32px] text-center">
                  CodeQuest: Enjoy an interactive game, to test your JavaScript
                </h3>
              </div>
              <img
                className="w-[407px] h-[237px] ml-auto mr-10 object-cover"
                alt="CodeQuest screenshot"
                src="public/image-7.png"
              />
            </CardContent>
          </Card>

          {/* Project Cards */}
          <div className="grid grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="h-[265px] rounded-[25px] overflow-hidden border-none [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]"
              >
                <CardContent className="p-0 flex flex-col items-center">
                  <h3 className="mt-3 [font-family:'Montserrat',Helvetica] font-normal text-white text-[28px] text-center">
                    {project.title}
                  </h3>
                  <img
                    className="w-[327px] h-[146px] mt-6 object-cover"
                    alt={project.imageAlt}
                    src={project.imageSrc}
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* About Me Section */}
          <Card className="w-full h-[97px] rounded-[25px] overflow-hidden border-none [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]">
            <CardContent className="flex items-center justify-center h-full p-0">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-white text-5xl text-center">
                About Me
              </h2>
            </CardContent>
          </Card>

          {/* About Me Content */}
          <div className="flex gap-8">
            <img
              className="w-[374px] h-[552px] object-cover"
              alt="Parjad profile"
              src="public/parjadfinal2-19-2.png"
            />

            <Card className="flex-1 h-[551px] rounded-[25px] overflow-hidden border-none [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]">
              <CardContent className="p-10 flex flex-col items-center">
                <p className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xl text-center mb-6">
                  <span>Hi There! I&apos;m Parjad, a </span>
                  <span className="font-bold">Web Developer </span>
                  <span>and </span>
                  <span className="font-bold">Programmer.</span>
                  <span>
                    {" "}
                    Who Enjoying developing websites and apps. I welcome you to
                    my portfolio website, where i show case my skills and
                    knowledge. If you ever wanted to contact me, please
                    don&apos;t hesitate i&apos;m available at the contact
                    section below.
                  </span>
                </p>

                <p className="[font-family:'Montserrat',Helvetica] font-normal text-white text-xl text-center mb-10">
                  Building website is my passion, however i do not stop there! I
                  try my best to become a better program as a whole making
                  application using other software languages. below is my set of
                  skills and tools that i know and planning to learn..
                </p>

                <div className="flex gap-6 mt-10">
                  {programmingLanguages.map((lang, index) => (
                    <img
                      key={index}
                      className="w-[50px] h-[50px] object-cover"
                      alt={lang.name}
                      src={lang.src}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Me Section */}
          <Card className="w-full h-[111px] rounded-[50px] overflow-hidden border-none shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]">
            <CardContent className="flex items-center justify-center h-full p-0">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-white text-4xl text-center">
                Contact Me
              </h2>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card className="w-full h-[493px] rounded-[25px] overflow-hidden border-none shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(5,32,74)_0%,rgb(11.89,76.11,176)_100%)]">
            <CardContent className="p-10 flex">
              <div className="w-[250px] flex flex-col gap-16">
                <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-white text-[32px] text-center">
                  Name<span className="text-xl">:</span>
                </div>
                <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-white text-[32px] text-center">
                  Email
                </div>
                <div className="[font-family:'Arial-Regular',Helvetica] font-normal text-white text-[32px] text-center">
                  Comment
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-6">
                <Input className="h-[53px] bg-white" aria-label="Name" />
                <Input
                  className="h-[53px] bg-white"
                  type="email"
                  aria-label="Email"
                />
                <Textarea className="h-[136px] bg-white" aria-label="Comment" />

                <div className="flex items-center gap-4 mt-6">
                  <Button className="w-[175px] h-[60px] bg-[#b497d6] rounded-[50px] text-xl text-[#02020a] [font-family:'Arial-Regular',Helvetica]">
                    Submit
                  </Button>

                  <div className="w-[46px] h-[46px] relative ml-6">
                    <img
                      className="w-2 h-2 top-1 absolute left-1"
                      alt="Vector"
                      src="public/vector-1.svg"
                    />
                    <img
                      className="absolute w-[35px] h-[23px] top-[17px] left-1.5"
                      alt="Group"
                      src="public/group-2.png"
                    />
                  </div>

                  <div className="w-[46px] h-[46px] relative">
                    <div className="relative w-[34px] h-[37px] top-[5px] left-[5px]">
                      <img
                        className="w-[29px] h-9 top-px absolute left-1"
                        alt="Vector"
                        src="public/vector.svg"
                      />
                      <img
                        className="absolute w-[34px] h-9 top-0 left-0"
                        alt="Group"
                        src="public/group-3.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        {/* Footer */}
        <footer className="w-full h-[100px] [background:linear-gradient(180deg,rgb(191,172,170)_0%,rgb(89,80.15,79.21)_100%)] flex items-center px-10">
          <img
            className="w-[60px] h-[60px] object-cover mr-4"
            alt="Professional logo"
            src="public/professional-logo-1-1.png"
          />

          <div className="flex items-center">
            <span className="[font-family:'Montserrat',Helvetica] text-base font-normal text-black">
              Parjad Minooei
            </span>

            <img
              className="w-[38px] h-[38px] mx-2"
              alt="Copyright symbol"
              src="public/material-symbols-copyright-outline-rounded.svg"
            />

            <span className="[font-family:'Montserrat',Helvetica] text-base font-normal text-black">
              2025, All Right Reserved
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};
