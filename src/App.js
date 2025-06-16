import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import project1 from "./image/countryMap.webp";
import project2 from "./image/zomatoPage.png";
import project3 from "./image/myntraApp.png";
import profileImg from "./image/vimal.jpg";
import reactIcon from "./image/React.png";
import HTMLIcon from "./image/html.png";
import CSSIcon from "./image/css-3.png";
import BootstrapIcon from "./image/bootstrap.png";
import JavaScriptIcon from "./image/js.png";
import tailWindIcon from "./image/Tailwind CSS.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Scroll reveal hook
  const useScrollReveal = () => {
    useEffect(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-reveal class
      const elements = document.querySelectorAll(".scroll-reveal");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, []);
  };

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Geographical State and District Selection",
      description:
        "Built a dynamic modal component for selecting Indian states and districts with real-time updates, persistent localStorage, hierarchical checkboxes featuring Select All and indeterminate states, and a summary UI with removable selections",
      image: project1,
      tech: ["React.js", "JavaScript (ES6)", "CSS", "localStorage"],
      github: "https://github.com/VimalDude07/-State-District-Selection",
      live: "https://state-district-selection.vercel.app/",
    },
    {
      title: "Zomato Clone",
      description:
        "Developed a Zomato clone website using HTML, CSS, and JavaScript, replicating core features and UI for a responsive food delivery platform.",
      image: project2,
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/VimalDude07/Zomato",
      live: "https://v0-new-project-dbdqcacejeq.vercel.app/",
    },
    {
      title: "Myntra Clone",
      description:
        "Created a responsive Myntra clone website using HTML, CSS, JavaScript, and Bootstrap, replicating key features and user interface of the original platform.",
      image: project3,
      tech: ["HTML", "CSS", "Bootstrap"],
      github: "https://github.com/VimalDude07/myntra",
      live: "https://myntra-k4cb.vercel.app/",
    },
  ];

  const skillCategories = [
    {
      name: "Frontend",
      icon: "💻",
      items: ["React.js", "JavaScript", "HTML5", "CSS3"],
    },
    {
      name: "Styling",
      icon: "🎨",
      items: ["Tailwind CSS", "Bootstrap", "CSS Grid"],
    },
    {
      name: "Tools",
      icon: "🛠️",
      items: ["Git", "VS Code", "Vercel"],
    },
  ];

  const skills = [
    { name: "React", icon: reactIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "HTML5", icon: HTMLIcon },
    { name: "CSS3", icon: CSSIcon },
    { name: "Bootstrap", icon: BootstrapIcon },
    { name: "Tailwind CSS", icon: tailWindIcon },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    console.log(e, ";lgfds");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y5iqjyh",
        "template_ujxtcg4",
        form.current,
        "FFQHSLDXdgWSjrbGe"
      )
      .then(
        () => {
          alert("Thank you for your message! I'll get back to you soon.");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error);
        }
      );
  };
  const fullName = "Vimal R";
  const typingSpeed = 150;
  const pauseAfterTyping = 1000;

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullName[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else if (!isTypingComplete) {
      setIsTypingComplete(true);
      setTimeout(() => {
        setShowContent(true);
      }, pauseAfterTyping);
    }
  }, [currentIndex, fullName, isTypingComplete]);

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-reveal {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .scroll-reveal.delay-100 {
          transition-delay: 0.1s;
        }

        .scroll-reveal.delay-200 {
          transition-delay: 0.2s;
        }

        .scroll-reveal.delay-300 {
          transition-delay: 0.3s;
        }

        .scroll-reveal.delay-400 {
          transition-delay: 0.4s;
        }

        .scroll-reveal.delay-500 {
          transition-delay: 0.5s;
        }

        .scroll-reveal.delay-600 {
          transition-delay: 0.6s;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-colors duration-200 ${
                      activeSection === item
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-[240px] bg-white shadow-2xl transform transition-transform duration-500 ease-in-out z-40 md:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-20 px-6">
            <div className="space-y-1">
              {["home", "about", "skills", "projects", "contact"].map(
                (item, index) => (
                  <button
                    key={item}
                    onClick={() => {
                      scrollToSection(item);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left px-6 py-4 capitalize text-lg font-medium transition-all duration-300 rounded-lg transform ${
                      activeSection === item
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    } ${
                      isMenuOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : "0ms",
                    }}
                  >
                    {item}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white/80 to-transparent backdrop-blur-sm z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white/80 to-transparent backdrop-blur-sm z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
          <div className="space-y-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
              VR
            </div>
            <div className="relative mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-800 bg-clip-text text-transparent tracking-tight">
                {displayedText}
                <span className="inline-block w-1 h-16 md:h-20 lg:h-24 ml-2"></span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Frontend Developer & UI/UX Designer Creating Beautiful, Functional
              Digital Experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </button>
              <a
                href="https://drive.google.com/file/d/1TTNS5oDkNzuGMq-LFSSyPbpJ7VLoYvty/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View My Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 scroll-reveal delay-200">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate frontend developer eager to start my career in
                building modern, user-friendly web applications. I specialize in
                HTML, CSS, Tailwind, Bootstrap, JavaScript, and React, and enjoy
                transforming ideas into responsive and visually appealing
                designs.
              </p>
              <div className="scroll-reveal delay-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Education Details:
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>
                    • Bachelor of Commerce (General) from C Kandaswami Naidu
                    College for Men (2021-2024)
                  </li>
                  <li>
                    • HSC Sri Kalaimagal Vidya Mandir Matric Hr Sec School
                    (2019-2021)
                  </li>
                  <li>
                    • SSLC Sri Ram Dayal Khemka Vivekananda Vidyalaya Senior
                    Secondary School (2018-2019)
                  </li>
                </ul>
              </div>
              <div className="scroll-reveal delay-400">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Courses:
                </h3>
                <p className="text-gray-600">
                  Frontend Development with React in Leora Infotech –
                  GUMMIDIPOONDI, INDIA. June 2024 – May 2025
                </p>
              </div>
              <div className="flex flex-wrap gap-4 scroll-reveal delay-500">
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Chennai, India
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  vimalr.1304@gmail.com
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  7806977627
                </div>
              </div>
            </div>
            <div className="relative scroll-reveal delay-600">
              <div className="w-[350px] h-[350px] bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
<section id="skills" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
    {/* Section Title */}
    <div className="text-center mb-16 scroll-reveal">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Skills & Expertise
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
    </div>

    {/* Skills Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 scroll-reveal delay-${
            (index + 1) * 100
          }`}
        >
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">{category.icon}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
          </div>
          <div className="space-y-2">
            {category.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center justify-between">
                <span className="text-gray-600 text-sm">{item}</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <svg
                      key={starIndex}
                      className={`w-3 h-3 ${
                        starIndex < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Skills Animation Carousel */}
    <div className="relative overflow-hidden scroll-reveal delay-400">
      <div className="relative z-0 flex animate-scroll space-x-8 py-6">
        {[...skills, ...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-center">
              <div className="text-4xl mb-2 flex justify-center">
                <img
                  width={50}
                  height={50}
                  src={skill.icon}
                  alt={skill.name}
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Gradient Overlays (hide side shadows) */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-20"></div>
    </div>
  </div>
</section>
        

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  {" "}
                  {/* Keep this for hover scale to work */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-gray-800"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <svg
                          className="w-5 h-5 text-gray-800"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal opacity-0 translate-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
            <p className="text-xl text-gray-600 mt-4">
              Let's work together on your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Side */}
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-center space-x-4 scroll-reveal opacity-0 translate-y-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  {/* Email Icon */}
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">vimalr.1304@gmail.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4 scroll-reveal opacity-0 translate-y-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">7806977627</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4 scroll-reveal opacity-0 translate-y-8">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Location
                  </h3>
                  <p className="text-gray-600">Chennai, India</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex space-x-4 pt-4 scroll-reveal opacity-0 translate-y-8">
                <a
                  href="https://github.com/VimalDude07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors transform hover:scale-110"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="scroll-reveal opacity-0 translate-y-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all hover:border-blue-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all hover:border-blue-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all hover:border-blue-300"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  onClick={sendEmail}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
