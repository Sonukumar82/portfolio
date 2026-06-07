import profile from "./assets/profile.png";
import { useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaBars } from "react-icons/fa";
import axios from "axios";
import {
  FaAws,
  FaDocker,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiJenkins,
  SiPython,
} from "react-icons/si";

function App() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleChange = (e) => {

  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });

};

const handleSubmit = async (e) => {

  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.message
  ) {

    alert("Please fill all fields ⚠️");
    return;
  }

  try {
      setLoading(true);
    await axios.post(
  "/api/contact",
  formData
);

    alert("Message Sent Successfully 🚀");
    setLoading(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

  } catch (error) {
    console.log(error);
    alert("Failed To Send Message ❌");
    setLoading(false);
  }

};
  const [menuOpen, setMenuOpen] = useState(false);
const particlesInit = async (main) => {
  await loadSlim(main);
};
  const skills = [
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiPython />, name: "Python" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaGithub />, name: "GitHub" },
  ];

  return (
    <>
  <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      background: {
        color: {
          value: "#050816",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#00ffff",
        },
        links: {
          color: "#00ffff",
          distance: 150,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
        },
        number: {
          value: 50,
        },
        opacity: {
          value: 0.3,
        },
        size: {
          value: 2,
        },
      },
    }}
    className="absolute inset-0 -z-10"
  />

  <div className="relative z-10"></div>
    
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/5 border-b border-white/10">

  <div className="flex justify-between items-center px-10 py-5">

    <h1 className="text-2xl font-bold text-cyan-400">
      Sonu.DevOps
    </h1>

    <ul className="hidden md:flex gap-8 text-gray-300">
      <div
  className="md:hidden text-2xl cursor-pointer"
  onClick={() => setMenuOpen(!menuOpen)}
>
  <FaBars />
</div>
      <a href="#home">
        <li className="hover:text-cyan-400 cursor-pointer transition">
          Home
        </li>
      </a>

      <a href="#skills">
        <li className="hover:text-cyan-400 cursor-pointer transition">
          Skills
        </li>
      </a>

      <a href="#projects">
        <li className="hover:text-cyan-400 cursor-pointer transition">
          Projects
        </li>
      </a>

      <a href="#contact">
        <li className="hover:text-cyan-400 cursor-pointer transition">
          Contact
        </li>
      </a>

    </ul>

  </div>

</nav>
{
  menuOpen && (
    <div className="md:hidden fixed top-20 left-0 w-full bg-[#0b1120] border-b border-gray-800 z-40">

      <ul className="flex flex-col items-center gap-6 py-8 text-lg">

        <a href="#home" onClick={() => setMenuOpen(false)}>
          <li className="hover:text-cyan-400">
            Home
          </li>
        </a>

        <a href="#skills" onClick={() => setMenuOpen(false)}>
          <li className="hover:text-cyan-400">
            Skills
          </li>
        </a>

        <a href="#projects" onClick={() => setMenuOpen(false)}>
          <li className="hover:text-cyan-400">
            Projects
          </li>
        </a>

        <a href="#contact" onClick={() => setMenuOpen(false)}>
          <li className="hover:text-cyan-400">
            Contact
          </li>
        </a>

      </ul>

    </div>
  )
}
      {/* Hero Section */}
      <section
  id="home"
  className="flex flex-col justify-center items-center text-center min-h-screen pt-28 px-6 relative">

        <div className="absolute w-72 h-72 bg-cyan-500 blur-[120px] opacity-20 rounded-full top-20"></div>
       <motion.img
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
  src={profile}
  alt="profile"
  className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-cyan-400 shadow-lg shadow-cyan-500/50 mb-8 object-cover"
/>
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight"
        >
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Sonu Kumar
          </span>
        </motion.h2>

        <motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-6 text-lg md:text-2xl text-gray-400 max-w-3xl"
>

  <Typewriter
    words={[
      "DevOps Engineer",
      "AWS Cloud",
      "Kubernetes Expert",
      "CI/CD Automation Engineer",
      "Azure cloud",
      "GCP Cloud"
    ]}
    loop={true}
    cursor
    cursorStyle="_"
    typeSpeed={80}
    deleteSpeed={50}
    delaySpeed={1500}
  />

</motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="mt-10 px-8 py-4 bg-cyan-500 rounded-2xl text-lg font-semibold shadow-lg shadow-cyan-500/50 hover:bg-cyan-400 transition"
        >
          Explore Projects
        </motion.button>
        <a
  href="/Sonu_K_CV.pdf"
  download
>
  <button className="mt-5 px-8 py-4 border border-cyan-400 rounded-2xl text-lg font-semibold hover:bg-cyan-400 hover:text-black transition">
    Download Resume
  </button>
</a>

      </section>
{/* About Section */}

<section id="skills" className="px-10 py-20">

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
    About Me
  </h2>

  <div className="max-w-5xl mx-auto bg-[#111827] border border-gray-800 rounded-3xl p-10 text-gray-300 leading-8 text-lg">

    <p>
      DevOps Engineer with 3.7 years of experience in AWS, Azure, GCP, Kubernetes, Terraform, Jenkins, Argo CD, GitOps and CI/CD automation.

Experienced in cloud infrastructure management, Infrastructure as Code (IaC), deployment automation, monitoring, production support and cloud-native application deployments.
    </p>

    <p className="mt-6">
      Experienced with Jenkins, Argo CD, Docker, Terraform, GitHub,
      Kubernetes, AWS Lambda, EC2, DynamoDB, and monitoring tools like
      CloudWatch and New Relic.
    </p>

    <p className="mt-6">
      Passionate about automation, cloud-native applications,
      Infrastructure as Code (IaC), and scalable deployment systems.
    </p>

  </div>

</section>
      {/* Skills Section */}
      <section id="skills" className="px-10 py-20">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center hover:border-cyan-400 transition"
            >
              <div className="text-5xl text-cyan-400 mb-4">
                {skill.icon}
              </div>

              <h3 className="text-xl font-semibold">
                {skill.name}
              </h3>
            </motion.div>
          ))}

        </div>

      </section>
      {/* Experience Section */}

<section className="px-10 py-20">

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
    Experience
  </h2>

  <div className="max-w-5xl mx-auto space-y-8">

    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

      <h3 className="text-2xl font-bold">
        Senior Software Engineer — Capgemini
      </h3>

      <p className="text-cyan-400 mt-2">
        Oct 2024 – Present
      </p>

      <ul className="mt-5 space-y-3 text-gray-300">
        <li>• Designed and Managed CI/CD pipelines using Jenkins, Argo CD, and GitOps methodologies
to enhance deployment efficiency and reliability.</li>
        <li>• Streamlining infrastructure management processes through automation scripting, minimizing
manual intervention and reducing operational overhead.</li>
        <li>• Administering Kubernetes deployments to ensure high availability and performance of
cloud-native applications, while implementing best practices for container orchestration.</li>
        <li>•Transitioning CI/CD workflow from traditional Jenkins setups to modern Argo CD frameworks,
thereby improving deployment speed and reducing errors.</li>
        <li>• Designing and deploying AWS solutions, including Lambda, EC2, and DynamoDB, while
integrating comprehensive monitoring solutions via New Relic and CloudWatch for proactive
performance management.</li>
        <li>• Enhancing database performance by optimizing MySQL queries and developing automation
scripts that facilitate routine maintenance tasks.</li>
      </ul>

    </div>
<div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

      <h3 className="text-2xl font-bold">
        Highlights:
      </h3>

    

      <ul className="mt-5 space-y-3 text-gray-300">
        <li>• Leveraged GitHub and Terraform for effective version control and Infrastructure as Code (IaC)
practices, ensuring consistent and repeatable deployments.</li>
        <li>• Successfully reduced deployment times through the implementation of automated CI/CD
workflow, leading to increased productivity & faster time-to-market for applications.</li>
        <li>• Played a pivotal role in enhancing system reliability by migrating critical applications to a
cloud-native architecture, resulting in improvement in uptime.</li>
        
      </ul>

    </div>
    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition">

      <h3 className="text-2xl font-bold">
        Software Engineer — Capgemini
      </h3>

      <p className="text-cyan-400 mt-2">
        Dec 2022 – Oct 2024
      </p>

      <ul className="mt-5 space-y-3 text-gray-300">
        <li>• Engaged in comprehensive training on DevOps engineering principles and Java full stack
development, focusing on technologies such as React, Microservices, and MySQL.</li>
        <li>• Developed and maintained CI/CD pipelines for GCP deployments, ensured robust testing and
integration processes that align with industry standards.</li>
        <li>• Assisted in scaling AWS infrastructure, managed essential tasks such as password updates
and GitHub repository management to ensure seamless operations.</li>
        <li>• Contributed to the development of Java full stack applications, employed React and
Microservices architecture to deliver high-quality software solutions.</li>
        <li>• Actively resolved Jira tickets, collaborated with cross-functional teams to address issues and
enhance overall DevOps processes.</li>
      </ul>

    </div>

  </div>

</section>
{/* Projects Section */}

<section id="projects" className="px-10 py-20">

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}
    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:scale-105 duration-300">

      <h3 className="text-2xl font-bold mb-4">
        Kubernetes CI/CD Pipeline
      </h3>

      <p className="text-gray-400 leading-7">
        Built automated deployment pipelines using Jenkins, Argo CD,
        Docker, and Kubernetes with GitOps workflow.
      </p>

    </div>

    {/* Project 2 */}
    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:scale-105 duration-300">

      <h3 className="text-2xl font-bold mb-4">
        AWS Cloud Infrastructure
      </h3>

      <p className="text-gray-400 leading-7">
        Designed scalable cloud infrastructure using EC2, Lambda,
        DynamoDB, S3, and CloudWatch monitoring solutions.
      </p>

    </div>

    {/* Project 3 */}
    <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:scale-105 duration-300">

      <h3 className="text-2xl font-bold mb-4">
        Terraform Automation
      </h3>

      <p className="text-gray-400 leading-7">
        Automated infrastructure provisioning using Terraform and GitHub
        workflows for faster deployment and scalability.
      </p>

    </div>

  </div>

</section>
{/* GitHub Section */}

<section className="px-10 py-20">

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
    GitHub
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Repo 1 */}
    <a
      href="https://github.com/Sonukumar82"
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:scale-105 duration-300">

        <h3 className="text-2xl font-bold mb-4">
          DevOps Projects
        </h3>

        <p className="text-gray-400 leading-7">
          Kubernetes, Jenkins, Docker, Terraform, AWS and CI/CD related projects.
        </p>

      </div>
    </a>

    {/* Repo 2 */}
    <a
      href="https://github.com/Sonukumar82"
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:scale-105 duration-300">

        <h3 className="text-2xl font-bold mb-4">
          React Applications
        </h3>

        <p className="text-gray-400 leading-7">
          Frontend applications using React, JavaScript, APIs, and responsive UI.
        </p>

      </div>
    </a>

    {/* Repo 3 */}
    <a
      href="https://github.com/Sonukumar82"
      target="_blank"
      rel="noreferrer"
    >
      <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-cyan-400 transition hover:scale-105 duration-300">

        <h3 className="text-2xl font-bold mb-4">
          Cloud Automation
        </h3>

        <p className="text-gray-400 leading-7">
          AWS automation scripts, Infrastructure as Code, monitoring, and deployment workflows.
        </p>

      </div>
    </a>

  </div>

</section>
{/* Certifications */}

<section className="px-10 py-20">

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      AWS Cloud Practitioner
    </div>

    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      Microsoft Azure Fundamentals
    </div>

    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      Google Associate Cloud Engineer
    </div>

    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-800">
      DevOps Beginner to Advanced
    </div>

  </div>

</section>
{/* Contact Section */}

<section
  id="contact"
  className="px-10 py-20 text-center"
>

  <h2 className="text-4xl font-bold text-cyan-400 mb-10">
    Contact Me
  </h2>

  <form
  onSubmit={handleSubmit}
  className="max-w-3xl mx-auto flex flex-col gap-6"
>

    <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="bg-[#111827] border border-gray-700 rounded-2xl px-6 py-4 outline-none"
/>

    <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  placeholder="Your Email"
  className="bg-[#111827] border border-gray-700 rounded-2xl px-6 py-4 outline-none"
/>

    <textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Your Message"
  rows="6"
  className="bg-[#111827] border border-gray-700 rounded-2xl px-6 py-4 outline-none"
></textarea>

<button
  type="submit"
  className="bg-cyan-500 hover:bg-cyan-400 transition rounded-2xl py-4 text-lg font-semibold"
>

  {
    loading
      ? "Sending..."
      : "Send Message"
  }

</button>
  </form>
  <hr
  style={{
    margin: "40px 0 20px",
    border: "1px dashed #00d4ff",
  }}
/>

<div
  style={{
    textAlign: "center",
    color: "white",
    marginBottom: "30px",
  }}
>
  <p>Email: sonu98kumar49.sk@gmail.com</p>
  <p>Contact: +91 8294678198</p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "20px",
      marginTop: "15px",
    }}
  >
    <a
      href="https://www.linkedin.com/in/sonu-kumar-/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
        alt="LinkedIn"
        width="30"
      />
    </a>

    <a
      href="https://github.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        alt="GitHub"
        width="30"
      />
    </a>
  </div>
</div>
</section>
    </div>
    </>
  );
}

export default App;