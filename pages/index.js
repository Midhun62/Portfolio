"use client";
import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState, useEffect } from "react";
// import EducationSection from "../pages/EducationSection";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseBetween = 1000;
  const dataText = ["MIDHUN M", "Web Developer", "Data Scientist"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const slides = [
    {
      title: 'Certificate 1',
      image: './ds.png',
    },
    {
      title: 'Certificate 2',
      image: './reactcef.png',
    },
    {
      title: 'Certificate 3',
      image: './Salesforce.png',
    },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // for scroll function
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // for store mode in localstorage
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    if (savedDarkMode) setDarkMode(savedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  // for Text animation function useeffect
  useEffect(() => {
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setText(dataText[loopNum].substring(0, text.length - 1));
        if (text === "") {
          setIsDeleting(false);
          setLoopNum((loopNum + 1) % dataText.length);
        }
      }, deletingSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setText(dataText[loopNum].substring(0, text.length + 1));
        if (text === dataText[loopNum]) {
          setTimeout(() => setIsDeleting(true), pauseBetween);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Creating a responsive portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 pt-20">
        <section id="home" className="min-h-screen py-8 sm:py-10 lg:py-12">
          <nav
            className={`px-16 py-6 mb-8 flex justify-between dark:text-white fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 items-center transition-all duration-300 ${isScrolled ? "bg-white/30 backdrop-filter backdrop-blur-lg border-b border-gray-200 dark:border-gray-800" : ""
              }`}
          >
            <div className="flex items-center">
              <h1 className="font-burtons text-lg sm:text-xl px-2 py-2 rounded-md transition-all duration-500 ease-in-out transform hover:bg-gradient-to-r from-cyan-500 to-teal-500 hover:text-white hover:scale-105 hover:rotate-2 hover:shadow-lg">
                MIDHUN M
              </h1>
            </div>

            <ul className="hidden md:flex items-center space-x-4">
              <li>
                <a href="#home" className="text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-2 rounded-md hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-2 rounded-md hover:text-white">About</a>
              </li>
              <li>
                <a href="#Projects" className="text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-2 rounded-md hover:text-white">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-2 py-2 rounded-md hover:text-white">Contact Me</a>
              </li>
              {/* <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li> */}
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="resume.pdf" download>Resume</a>
              </li>
            </ul>
            <div className="md:hidden flex items-center">
              <button onClick={toggleNavbar} className="focus:outline-none">
                {isClick ? (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
          {isClick && (
            <div className="md:hidden">
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="block text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md hover:text-white dark:text-white">Home</a>
                </li>
                <li>
                  <a href="#about" className="block text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md hover:text-white dark:text-white">About</a>
                </li>
                <li>
                  <a href="#Projects" className="block text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md hover:text-white dark:text-white">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="block text-xl hover:bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 rounded-md hover:text-white dark:text-white">Contact Me</a>
                </li>
                {/* <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl mx-4 my-2 dark:text-white gap-4 " />
                </li> */}
                <li className="mt-4">
                  <a className="block bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4" href="resume.pdf" download>Resume</a>
                </li>
              </ul>
            </div>
          )}
          <div className="relative mx-auto w-32 h-32 md:w-56 md:h-56 mt-20"> {/* Adjusted size */}
            <div className="absolute inset-0 bg-teal-500 rounded-full animate-jelly"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden bg-white shadow-xl hover:scale-105 transition-transform">
              <img
                src="/pic.png"
                layout="fill"
                objectFit="cover"
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="text-center p-10 py-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl py-2 text-teal-600 font-medium dark:text-teal-400">
              <span className="inline-block transition-all duration-500 ease-in-out transform hover:bg-white dark:hover:bg-gray-800 hover:text-teal-600 dark:hover:text-teal-400 hover:scale-105 hover:shadow-xl px-2 rounded-md">
                Hello, I'm
              </span>
            </h2>
            <h3 className="text-4xl py-2 dark:text-white md:text-5xl">
              <div className="typing-container">
                <strong>{text}</strong>
              </div>
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              "Hello and welcome! I'm Midhun, a passionate software developer who loves creating innovative solutions. Explore my portfolio to see my work and learn about my journey in tech."
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://github.com/Midhun62" target="_blank" rel="noopener noreferrer" className="hover:text-[#181717] dark:hover:text-[#181717] transition-colors shadow-md">
                <AiFillGithub />
              </a>
              <a href="https://www.linkedin.com/in/midhun-m-851b86225/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0077B5] dark:hover:text-[#0077B5] transition-colors shadow-lg">
                <AiFillLinkedin />
              </a>
              <a href="http://www.youtube.com/@TechMasterAITut" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF0000] dark:hover:text-[#FF0000] transition-colors shadow-lg">
                <AiFillYoutube />
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl py-1 dark:text-white pb-8 font-semibold">About Me</h3>
            <div className="text-xl dark:text-white">I am a frontend web developer with a passion for creating interactive and responsive web applications. I have experience working with HTML, CSS, JavaScript, React, Python, Mysql and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
              {/* techniology cards */}
              <div className="mt-12 mb-12">
                <h2 className="text-3xl font-bold text-center mb-8 text-teal-500 dark:text-teal-500">Tech-Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 mb-12">
                  {/* card 1 */}
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6 hover:bg-gradient-to-r from-cyan-300 to-teal-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 mx-auto">
                        <img src="/html5.png" alt="HTML Icon" className="h-16 w-16" />
                      </div>
                      <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">HTML</h3>
                    </div>
                  </div>

                  {/* card 2 */}
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6 hover:bg-gradient-to-r from-cyan-300 to-teal-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 mx-auto">
                        <img src="/css.png" alt="CSS Icon" className="h-16 w-16" />
                      </div>
                      <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">CSS</h3>
                    </div>
                  </div>

                  {/* card 3 */}
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6 hover:bg-gradient-to-r from-cyan-300 to-teal-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 mx-auto">
                        <img src="js.png" alt="JavaScript Icon" className="h-16 w-16" />
                      </div>
                      <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">JavaScript</h3>
                    </div>
                  </div>

                  {/* card 4 */}
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6 hover:bg-gradient-to-r from-cyan-300 to-teal-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 mx-auto">
                        <img src="/react.svg" alt="JavaScript Icon" className="h-16 w-16" />
                      </div>
                      <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">React Js</h3>
                    </div>
                  </div>

                  {/* card 5 */}
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6 hover:bg-gradient-to-r from-cyan-300 to-teal-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 mx-auto">
                        <img src="/python.svg" alt="JavaScript Icon" className="h-14 w-14" />
                      </div>
                      <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">Python</h3>
                    </div>
                  </div>

                  {/* card 6 */}
                  <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6 hover:bg-gradient-to-r from-cyan-300 to-teal-300">
                      <div className="flex items-center justify-center h-16 w-16 rounded-full mb-4 mx-auto">
                        <img src="/mysql.svg" alt="JavaScript Icon" className="h-16 w-16" />
                      </div>
                      <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">Mysql</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 mb-20">
              <h2 className="text-3xl font-bold text-center mb-8 text-teal-500 dark:text-teal-500">Education</h2>
              <div className="w-full flex justify-center items-center text-blue-50 pt-10">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-9">
                  {/* Timeline Item 1 */}
                  <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-teal-500 rounded-md p-2 md-pl-4">
                      <h1 className="text-xl font-medium pt-2">K.S.R. College of Engineering, Tiruchengode</h1>
                      <p className="font-light pb-2">2020-2024</p>
                      <p className="sm:text-sm text-xs">I completed my B.E Computer Science degree with 80%</p>
                    </div>
                  </div>

                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-teal-500"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-teal-500 z-10 text-black text-center">1</div>
                  </div>
                  <div className="col-span-1 w-full h-full"></div>
                  {/* Timeline Item 2 */}
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative  col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-teal-500"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-teal-500 z-10 text-black text-center">2</div>
                  </div>

                  <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-gray-500 rounded-md p-2 md-pl-4">
                      <h1 className="text-xl font-medium pt-2">Sengunthar Matric Higher Secondary School</h1>
                      <p className="font-light pb-2">2019-2020</p>
                      <p className="sm:text-sm text-xs">I completed my HSC in Senguthar school with 64%</p>
                    </div>
                  </div>
                  {/* Timeline Item 3 */}
                  <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-teal-500 rounded-md p-2 md-pl-4">
                      <h1 className="text-xl font-medium pt-2">Sengunthar Matric Higher Secondary School</h1>
                      <p className="font-light pb-2">2017-2018</p>
                      <p className="sm:text-sm text-xs">I completed my SSLC in Senguthar school with 85%</p>
                    </div>
                  </div>

                  <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-teal-500"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-teal-500 z-10 text-black text-center">3</div>
                  </div>
                  <div className="col-span-1 w-full h-full"></div>
                  {/* Timeline Item 4 */}
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative  col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-teal-500"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-teal-500 z-10 text-black text-center blinking">4</div>
                  </div>

                  <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-gray-500 rounded-md p-2 md-pl-4">
                      <h1 className="text-xl font-medium py-2">Data Science</h1>
                      <p className="sm:text-sm text-xs">Learning data science course in excelR institute in bangalore.</p>
                    </div>
                  </div>

                  {/* Timeline Item 4
                  <div className="col-span-4 w-full h-full"></div>
                  <div className="relative  col-span-1 w-full h-full flex justify-center items-center">
                    <div className="h-full w-1 bg-teal-500"></div>
                    <div className="absolute w-6 h-6 rounded-full bg-teal-500 z-10 text-black text-center blinking">4</div>
                  </div>

                  <div className="col-span-4 w-full h-full">
                    <div className="w-full h-full bg-gray-500 rounded-md p-2 md-pl-4">
                      <h1 className="text-xl font-medium py-2">Searching for Opportunities</h1>
                      <p className="sm:text-sm text-xs">Currently looking for an organization where I can leverage my skills in JavaScript, React, Next.js, and more to contribute to exciting projects and continue growing my expertise. Open to roles that offer learning and development opportunities.</p>
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-center mb-14 text-teal-500 dark:text-teal-500">Certificates</h2>
              <div className="relative w-full max-w-3xl mx-auto">
                {/* Arrow Buttons and Certificate Image */}
                <div className="relative flex items-center justify-between">
                  {/* Left Arrow Button */}
                  <button
                    className="p-2 md:p-4 bg-gray-200 text-gray-800 rounded-full shadow-md hover:bg-gray-300 transform -translate-y-1/2 sm:-translate-y-0 mr-4"
                    onClick={goToPrevious}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>

                  {/* Certificate Image */}
                  <div className="relative w-full">
                    <img
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      className="w-full h-auto object-cover cursor-pointer rounded-lg"
                      onClick={() => openModal(currentIndex)} // Opens modal on image click
                    />
                  </div>

                  {/* Right Arrow Button */}
                  <button
                    className="p-2 md:p-4 bg-gray-200 text-gray-800 rounded-full shadow-md hover:bg-gray-300 transform -translate-y-1/2 sm:-translate-y-0 ml-4"
                    onClick={goToNext}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 md:w-6 md:h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Modal for Enlarged Image */}
              {isModalOpen && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                  <div className="relative max-w-4xl mx-auto">
                    <img
                      src={slides[currentIndex].image}
                      alt={slides[currentIndex].title}
                      className="w-full h-auto object-contain rounded-lg"
                    />
                    <button
                      className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full"
                      onClick={closeModal} // Closes modal on click
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="Projects">
          <div className="py-8">
            <h3 className="text-2xl md:text-3xl py-1 dark:text-white font-semibold">Projects</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As I continue to grow in my journey as a web developer, I am currently working on a variety of web-based projects, refining my skills and expanding my portfolio. I am actively learning and preparing to venture into app development, with plans to start building innovative applications very soon.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              My goal is to collaborate with forward-thinking companies where I can apply my expertise, contribute to impactful projects, and continue my professional growth in the tech industry.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-10">

            {/* Project Card 1 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <img src="/Login.png" alt="Project 2 Thumbnail" className="h-48 w-full object-cover rounded-t-lg mb-4" />
                <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">Login Page</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Simple login page for email and password validation</p>
                <div className="text-center mt-4">
                  <a href=" https://midhun62.github.io/Login_Page/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <img src="/place.png" alt="Project 1 Thumbnail" className="h-48 w-full object-cover rounded-t-lg mb-4" />
                <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">College Placement Portal</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Developed a College Placement Portal with admin and student modules to
                  streamline and manage the placement process efficiently</p>
                <div className="text-center mt-4">
                  <a href="https://github.com/Place-Well/Frontend.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="p-6">
                <img src="/web5.png" alt="Project 3 Thumbnail" className="h-48 w-full object-cover rounded-t-lg mb-4" />
                <h3 className="text-center text-xl font-semibold mb-2 dark:text-black">Portfolio</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center">Created a personal portfolio website to showcase my projects, skills, and
                  experiences effectively.</p>
                <div className="text-center mt-4">
                  <a href="https://github.com/Midhun62/Portfolio.git" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10" id="contact">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="max-w-lg">
                <h3 className="text-3xl py-1 dark:text-white">Let's Connect</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                  I'm currently looking for new opportunities, my inbox is always open.
                  Whether you have a question or just want to say hi, I'll try my best to
                  get back to you!
                </p>
              </div>

              <form
                className="w-full bg-white p-8 rounded-lg shadow-lg dark:bg-gray-800"
                action="https://formspree.io/f/meojdybq"
                method="POST"
              >
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="abc@email.com"
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-gray-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Just saying hi"
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-gray-300"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-gray-300">Message</label>
                  <textarea
                    name="message"
                    placeholder="My email section is on a coding coffee break you can direct mail me"
                    className="w-full px-3 py-2 border rounded-lg dark:bg-gray-900 dark:text-gray-300"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>
      {/* Footer Section */}
      <footer className="w-full bg-gray-800 text-gray-200 py-6">
        <div className="container mx-auto text-center">
          <p className="text-md">
            © 2024 Midhun M. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Built with <span className="text-teal-500">Next.js</span> and <span className="text-teal-500">Tailwind CSS</span>.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="https://github.com/Midhun62" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
              <AiFillGithub className="text-2xl" />
            </a>
            <a href="https://www.linkedin.com/in/midhun-m-851b86225/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
              <AiFillLinkedin className="text-2xl" />
            </a>
            <a href="http://www.youtube.com/@TechMasterAITut" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500">
              <AiFillYoutube className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-16 right-14 bg-gray-200 dark:bg-gray-800 rounded-full p-4">
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-2xl text-gray-600 dark:text-gray-300"
        />
      </div>
    </div>
  );
}
