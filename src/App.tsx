import { MoonIcon, SunIcon, GithubIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme";
import { SEO } from "@/components/SEO";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { TypedIntro } from "@/components/TypedIntro";
import './App.css';

function App() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <HelmetProvider>
      <Router>
        <div className={`min-h-screen bg-background transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed w-full top-0 z-50 py-6 glass-card"
          >
            <div className="container flex items-center justify-between">
              <div>
                <Link to="/" className="text-lg font-medium hover:opacity-80 transition-opacity">Elias Lindholm</Link>
              </div>
              <div className="flex items-center gap-8">

                <a href="#projects" className="text-sm hover:text-foreground/70 transition-colors">
                  Projects
                </a>
                <a href="#skills" className="text-sm hover:text-foreground/70 transition-colors">
                  Skills
                </a>
                <a
                  href="mailto:hello@eliasl.org"
                  className="text-sm hover:text-foreground/70 transition-colors"
                >
                  Contact
                </a>
                <Button variant="ghost" size="sm" onClick={() => setIsDarkMode(!isDarkMode)}
                  className="rounded-full p-2"
                >
                  {isDarkMode ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </motion.nav>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>

          {/* Footer */}
          <footer className="border-t">
            <div className="container section py-16">
              <div className="grid md:grid-cols-3 gap-16">
                <div>
                  <h3 className="heading-md mb-6">Elias Lindholm</h3>
                  <p className="body-md max-w-xs">
                    14-year-old frontend developer learning and creating minimal digital experiences.
                  </p>
                </div>
                <div>
                  <h3 className="heading-md mb-6">Links</h3>
                  <ul className="space-y-3">
                    <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>

                    <li><a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
                    <li><a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="heading-md mb-6">Contact</h3>
                  <a href="mailto:hello@eliasl.org" className="body-md text-muted-foreground hover:text-foreground transition-colors block mb-3">
                    hello@eliasl.org
                  </a>
                  <div className="flex gap-4 mt-6">
                    <a href="https://github.com/Catspindev01" target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <GithubIcon className="h-5 w-5" />
                    </a>
                    <a href="https://x.com/Catspin_swe" target="_blank" rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors">
                      <TwitterIcon className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Elias Lindholm. All rights reserved.
                  </p>
                  <div>
                    <a href="//www.dmca.com/Protection/Status.aspx?ID=8917f928-86f8-4410-a07e-906b33b8c754" 
                      title="DMCA.com Protection Status" 
                      className="dmca-badge" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    > 
                      <img 
                        src="https://images.dmca.com/Badges/dmca-badge-w100-5x1-01.png?ID=8917f928-86f8-4410-a07e-906b33b8c754"  
                        alt="DMCA.com Protection Status" 
                      />
                    </a>
                    <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"></script>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </HelmetProvider>
  );
}

function HomePage() {
  return (
    <>
      <SEO />
      {/* Hero Section */}
      <section className="container section flex flex-col justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="space-y-6">
            <motion.h1 
              className="heading-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Frontend Developer Crafting Websites.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TypedIntro />
            </motion.div>
            <motion.p 
              className="body-lg max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Heyo! I'm catspin aka Elias Lindholm, a 14-year-old frontend developer passionate about creating beautiful and responsive user interfaces.
            </motion.p>
          </div>
          <motion.div 
            className="flex gap-4 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="#projects" className="minimal-button">
              View Projects
            </a>
            <a href="mailto:hello@eliasl.org" className="minimal-button">
              Get in Touch
            </a>
          </motion.div>
          <motion.div 
            className="flex gap-6 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="https://github.com/Catspindev01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/Catspin_swe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="container section border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="heading-lg mb-8">About</h2>
            <div className="space-y-6">
              <p className="body-md">
                I'm a 14-year-old frontend developer who's passionate about creating clean and functional websites. I specialize in building beautiful user interfaces and responsive web applications using modern frontend technologies.
              </p>
              <p className="body-md">
                I focus on crafting minimalist and modern websites that prioritize user experience. Every project is an opportunity for me to enhance my frontend development skills and create engaging web interfaces.
              </p>
            </div>
          </div>
          <div>
            <h2 className="heading-lg mb-8">Services</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Frontend Development",
                  description: "Building responsive and performant user interfaces with modern frontend technologies."
                },
                {
                  title: "UI/UX Design",
                  description: "Crafting user-centered experiences that balance aesthetics with functionality."
                },
                {
                  title: "Web Animation",
                  description: "Creating smooth, engaging animations and transitions to enhance user experience."
                }
              ].map((service) => (
                <div key={service.title} className="minimal-card">
                  <h3 className="heading-md mb-2">{service.title}</h3>
                  <p className="body-md">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="container section border-t border-border">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <h2 className="heading-lg mb-8">Experience</h2>
            <div className="space-y-6">
              <p className="body-md">
                My journey with technology began at the tender age of 6 when I received my first school laptop. This early exposure sparked a deep interest in computers that would shape my future path.
              </p>
              <p className="body-md">
                At age 9, I took my first step into the world of single-board computers with a Raspberry Pi 2B. Despite being old and slow, it opened up new possibilities and fueled my curiosity for hardware and computing.
              </p>
              <p className="body-md">
                Currently, I'm building and managing my own HomeLab, diving deep into technologies like Proxmox. This hands-on experience allows me to learn about virtualization, system administration, and infrastructure management in a practical way.
              </p>
            </div>
          </div>
          <div>
            <h2 className="heading-lg mb-8">Tech Journey</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Early Start",
                  description: "First exposure to computing with a school laptop at age 6, sparking interest in technology."
                },
                {
                  title: "Hardware Exploration",
                  description: "Started experimenting with Raspberry Pi 2B at age 9, learning basic hardware and Linux."
                },
                {
                  title: "HomeLab Development",
                  description: "Currently managing a HomeLab environment, working with Proxmox and various infrastructure technologies."
                }
              ].map((milestone) => (
                <div key={milestone.title} className="minimal-card">
                  <h3 className="heading-md mb-2">{milestone.title}</h3>
                  <p className="body-md">{milestone.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />
    </>
  );
}

export default App;