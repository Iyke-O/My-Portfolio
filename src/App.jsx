
function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      {/* NAVIGATION BAR */}
      
      <nav className="w-full px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4 bg-zinc-900 border-b border-orange-500/30">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-amber-400">
          EI.
        </h1>

        {/* NAVIGATION LINKS */}
        <div className="flex flex-wrap gap-4 md:gap-8 text-sm md:text-base text-zinc-300 font-medium">
          <a href="#home" className="hover:text-indigo-800">Home</a>
          <a href="#about" className="hover:text-indigo-800">About</a>
          <a href="#skills" className="hover:text-indigo-800">Skills</a>
          <a href="#projects" className="hover:text-indigo-800">Projects</a>
          <a href="#contact" className="hover:text-indigo-800">Contact</a>
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="#contact"
          className="hidden sm:inline-block bg-orange-600 text-white px-5 py-3 rounded-lg hover:bg-orange-500 transition"
        >
          Let's Talk
        </a>

      </nav>
 

      
{/* HERO SECTION */}
      <section
        id="home"
        className="min-h-[85vh] flex items-center px-8 md:px-16 py-20 bg-linear-to-br from-indigo-50 via-white to-purple-100"
        
      >
        <div className="max-w-6xl mx-auto w-full">

          <div className="max-w-3xl">

           <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Available for Opportunities
            </span>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Hi, I'm Ikechukwu Omaka.
            </h1>

            <h2 className="text-4xl md:text-6xl font-bold text-indigo-900 mt-3">
              I build for the web.
            </h2>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-2xl">
              I'm a developer passionate about building responsive,
              user-friendly web applications and solving real-world
              problems through technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="bg-indigo-900 text-white px-7 py-3 rounded-lg hover:bg-indigo-800 transition"
              >
                View My Projects →
              </a>

              <a
                href="#contact"
                className="border border-indigo-900 text-indigo-900 px-7 py-3 rounded-lg hover:bg-indigo-50 transition"
              >
                Contact Me
              </a>

            </div>

          </div>

        </div>
      </section>
      

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-8 md:px-16 bg-white">

        <div className="max-w-6xl mx-auto">

          {/* SECTION HEADING */}
          <div className="mb-12">
            <p className="text-indigo-800 font-semibold uppercase tracking-wider text-sm">
              Get to know me
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* ABOUT TEXT */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-5">
                Technology, creativity and problem-solving.
              </h3>

              <p className="text-gray-600 leading-relaxed mb-5">
                I'm Ikechukwu Omaka, a Computer Engineering graduate
                with a Master's degree in Computer Science and a
                growing passion for software development.
              </p>

              <p className="text-gray-600 leading-relaxed mb-5">
                My journey into web development has allowed me to
                explore how technology can be used to build practical,
                user-friendly solutions to everyday problems.
              </p>

              <p className="text-gray-600 leading-relaxed">
                I'm continuously developing my skills in modern
                web technologies, building projects and learning
                through hands-on experience. I'm eager to contribute,
                collaborate and grow as a developer.
              </p>
            </div>

            {/* QUICK INFORMATION */}
            <div className="bg-gray-50 rounded-2xl p-8">

              <h3 className="text-xl font-bold text-gray-900 mb-6">
                A little about me
              </h3>

              <div className="space-y-5">

                <div>
                  <p className="text-gray-400 text-sm">Name</p>
                  <p className="text-gray-800 font-medium">
                    Ikechukwu Omaka
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Education</p>
                  <p className="text-gray-800 font-medium">
                    BSc Computer Engineering
                  </p>
                  <p className="text-gray-800 font-medium">
                    MSc Computer Science
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Focus</p>
                  <p className="text-gray-800 font-medium">
                    Frontend & Backend Development
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-gray-800 font-medium">
                    Abuja, Nigeria
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-8 md:px-16 bg-gray-50">

        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-indigo-800 font-semibold uppercase tracking-wider text-sm">
              What I work with
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Technical Skills
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl">
              Technologies and tools I'm learning and using to
              build modern web applications.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">

            {/* FRONTEND */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 mb-5">
                Frontend Development
              </h3>

              <div className="flex flex-wrap gap-3">
                {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Next.js"].map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-900 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* BACKEND */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 mb-5">
                Backend Development
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Node.js", "Express.js", "REST APIs"].map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-900 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* DATABASE */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 mb-5">
                Databases
              </h3>

              <div className="flex flex-wrap gap-3">
                {["MongoDB", "SQL Fundamentals"].map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-900 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* TOOLS */}
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold text-indigo-900 mb-5">
                Tools & Technologies
              </h3>

              <div className="flex flex-wrap gap-3">
                {["Git", "GitHub", "VS Code", "Vite"].map((skill) => (
                  <span key={skill} className="bg-indigo-50 text-indigo-900 px-4 py-2 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-8 md:px-16 bg-white">

        <div className="max-w-6xl mx-auto">

          <div className="mb-12">
            <p className="text-indigo-800 font-semibold uppercase tracking-wider text-sm">
              My recent work
            </p>

            <h2 className="text-4xl font-bold text-gray-900 mt-3">
              Featured Projects
            </h2>

            <p className="text-gray-600 mt-4 max-w-2xl">
              A selection of projects I've worked on while developing
              my skills in web development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* WEDDING WEBSITE PROJECT */}
            <div className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">

              <div className="h-56 bg-indigo-900 flex items-center justify-center">
                <div className="text-center text-white p-6">
                  <p className="text-indigo-300 text-sm mb-3">
                    WEDDING CELEBRATION
                  </p>

                  <h3 className="text-3xl font-serif">
                    Alex & Blessing
                  </h3>

                  <p className="text-indigo-100 mt-2 text-sm">
                    Wedding Programme Website
                  </p>
                </div>
              </div>

              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-900">
                  Wedding Programme Website
                </h3>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  Designed and developed a responsive wedding
                  website featuring an event programme, photo
                  gallery and Google Maps directions.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["HTML", "CSS", "JavaScript"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-indigo-50 text-indigo-900 px-3 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="https://alex-blessing-wedding-programme.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-indigo-800 font-semibold hover:text-indigo-600"
                >
                  View Live Project →
                </a>

              </div>
            </div>

          </div>

        </div>

      </section>


        {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-8 md:px-16 bg-gray-50">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-indigo-800 font-semibold uppercase tracking-wider text-sm">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Let's Work Together
          </h2>

          <p className="text-gray-600 mt-5 leading-relaxed max-w-2xl mx-auto">
            I'm open to junior developer opportunities, collaborations
            and interesting projects. If you have an opportunity or
            would simply like to connect, I'd love to hear from you.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="mailto:iyke_omaka@yahoo.com"
              className="bg-indigo-900 text-white px-7 py-3 rounded-lg hover:bg-indigo-800 transition"
            >
              Email Me
            </a>

            <a
              href="https://github.com/Iyke-O"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-indigo-900 text-indigo-900 px-7 py-3 rounded-lg hover:bg-indigo-50 transition"
            >
              GitHub Profile
            </a>

          </div>

        </div>

      </section>


              {/* FOOTER */}
      <footer className="bg-blue-950 text-white px-8 md:px-16 py-8">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

          <div>
            <h3 className="text-xl font-bold">
              Engr Iyke.
            </h3>

            <p className="text-indigo-200 text-sm mt-1">
              Building and learning, one project at a time.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-indigo-100">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>

          <p className="text-indigo-200 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>

        </div>

      </footer>


    </div>
  )
}

export default App
