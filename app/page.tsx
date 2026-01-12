"use client"

import { Github, Linkedin, Mail, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem("darkMode", String(newMode))
    if (newMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-lg font-semibold">
              Hritik
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
              <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </a>
              <a href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Experience
              </a>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6 sunrise-gradient overflow-hidden">
        <div
          className="max-w-6xl mx-auto parallax-bg"
          style={{
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Rastrabhushan Dahal</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              Electrical Engineering Student & Data Science Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Presidential Scholar at Texas State University with expertise in Python, Machine Learning, and Signal
              Processing. Passionate about leveraging data-driven insights to solve complex problems in neuroscience and
              beyond.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/11hritik11"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rastrabhushan-dahal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rdb200@txstate.edu"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="ink-brush-divider" />

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm currently pursuing a Bachelor of Science in Electrical Engineering with a concentration in Computer
                Science and a minor in Physics at Texas State University, maintaining a perfect 4.0 GPA. As a
                Presidential Scholar, I'm committed to excellence in both academics and research.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey spans from winning hackathons to conducting cutting-edge EEG research. I'm particularly
                fascinated by the intersection of machine learning, signal processing, and neuroscience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Programming</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">NumPy</Badge>
                    <Badge variant="secondary">pandas</Badge>
                    <Badge variant="secondary">scikit-learn</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                    <Badge variant="secondary">Git</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Machine Learning</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">XGBoost</Badge>
                    <Badge variant="secondary">Random Forest</Badge>
                    <Badge variant="secondary">Classification</Badge>
                    <Badge variant="secondary">Regression</Badge>
                    <Badge variant="secondary">Time Series</Badge>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Specializations</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Signal Processing</Badge>
                    <Badge variant="secondary">EEG Analysis</Badge>
                    <Badge variant="secondary">Data Visualization</Badge>
                    <Badge variant="secondary">Statistical Analysis</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ink-brush-divider" />

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 project-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Beyond Blue</h3>
                <Badge className="ink-badge">Winner</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-4">River Hacks • Oct 2025</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Developed an XGBoost-based model for exoplanet exploration by cleaning planetary data, removing NaN and
                duplicate values, selecting key features, and deploying a prediction API using FastAPI.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="ink-badge">
                  Python
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  XGBoost
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  FastAPI
                </Badge>
              </div>
            </Card>

            <Card className="p-6 project-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">Adaptly</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">HackTexas (UT Austin) • Oct 2025</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Collaborated on designing a dataset and analyzing the financial statements of Toyota Financial Services,
                identifying performance indicators and visualizing key financial trends.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="ink-badge">
                  Python
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  pandas
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  Matplotlib
                </Badge>
              </div>
            </Card>

            <Card className="p-6 project-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">CaliHome Predictor</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Personal Project • Sep 2025</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Built a Random Forest Regressor to predict California housing prices using features such as distance to
                beach, proximity to downtown, bedroom count, and home area, and deployed a prototype on Streamlit.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="ink-badge">
                  Python
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  scikit-learn
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  Streamlit
                </Badge>
              </div>
            </Card>

            <Card className="p-6 project-card">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold">EEG Binary Classifier</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Personal Project • Aug 2025</p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Created a Streamlit app leveraging MNE-Python to process and visualize EEG data, predicting if the
                person is schizophrenic or not.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline" className="ink-badge">
                  Python
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  MNE
                </Badge>
                <Badge variant="outline" className="ink-badge">
                  Streamlit
                </Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="ink-brush-divider" />

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Experience</h2>
          <Card className="p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Undergraduate Research Assistant</h3>
                <p className="text-muted-foreground">EEG Data Analysis</p>
              </div>
              <div className="text-sm text-muted-foreground mt-2 md:mt-0">2024 – Present</div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">Texas State University</p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Working under a faculty supervisor on large-scale EEG datasets, focusing on preprocessing, feature
                  extraction, and statistical analysis of sleep-related neural signals.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Implemented Python-based pipelines for signal processing, including filtering, segmentation, and
                  computation of band-specific power features.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <span>
                  Applied machine learning techniques to analyze neural patterns and investigate relationships between
                  EEG features and behavioral or clinical variables.
                </span>
              </li>
            </ul>
          </Card>

          {/* Honors & Awards */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Honors & Awards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-2">RiverHacks Winner</h4>
                <p className="text-sm text-muted-foreground mb-3">Oct 2025</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Won the RiverHacks Hackathon by building an XGBoost-based model for exoplanet discovery, featuring
                  data cleaning, feature selection, and API deployment.
                </p>
              </Card>
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-2">Presidential Scholarship</h4>
                <p className="text-sm text-muted-foreground mb-3">Aug 2024</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Received the Presidential Scholarship for outstanding academic performance and excellence in Computer
                  Science. Full tuition merit-based award.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div className="ink-brush-divider" />

      {/* Education Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education</h2>
          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bachelor of Science in Electrical Engineering</h3>
                  <p className="text-muted-foreground">Texas State University</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">Expected May 2028</div>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>Concentration: Computer Science | Minor: Physics</p>
                <p className="font-semibold text-foreground">GPA: 4.0</p>
                <p>San Marcos, TX</p>
              </div>
            </Card>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">High School Diploma</h3>
                  <p className="text-muted-foreground">National Board</p>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">Graduated 2024</div>
              </div>
              <div className="space-y-2 text-muted-foreground">
                <p>GPA: 3.6 | IELTS: 8 | SAT: 1430</p>
                <p>Kathmandu, Nepal</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="ink-brush-divider" />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or research projects. Feel free to reach
            out!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <a href="mailto:rdb200@txstate.edu">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.linkedin.com/in/rastrabhushan-dahal/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://github.com/11hritik11" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Rastrabhushan Dahal. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
