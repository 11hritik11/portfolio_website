"use client"

import { Github, Linkedin, Mail, Moon, Sun, Code, Brain, Zap, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"

export default function MangaPortfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") && window.matchMedia("(prefers-color-scheme: dark)").matches)
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
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
      {/* Manga-style navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-manga-white dark:bg-ink-black border-b-4 border-ink-black dark:border-naruto-orange">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-naruto-orange rounded-full border-4 border-ink-black dark:border-manga-white flex items-center justify-center font-bold text-manga-white text-xl">
                H
              </div>
              <span className="text-xl font-black uppercase tracking-wider">HRITIK</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#about"
                className="text-sm font-bold uppercase tracking-wide hover:text-naruto-orange transition-colors"
              >
                STORY
              </a>
              <a
                href="#projects"
                className="text-sm font-bold uppercase tracking-wide hover:text-naruto-orange transition-colors"
              >
                MISSIONS
              </a>
              <a
                href="#skills"
                className="text-sm font-bold uppercase tracking-wide hover:text-naruto-orange transition-colors"
              >
                JUTSU
              </a>
              <a
                href="#contact"
                className="text-sm font-bold uppercase tracking-wide hover:text-naruto-orange transition-colors"
              >
                CONNECT
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-md hover:bg-naruto-orange hover:text-manga-white transition-colors border-2 border-ink-black dark:border-naruto-orange"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero section - Large feature panel */}
      <section className="pt-24 pb-12 px-4 hero-gradient relative overflow-hidden">
        <div className="speed-lines" />
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main hero panel */}
            <div className="lg:col-span-2 manga-card bg-manga-white dark:bg-card p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-naruto-orange text-manga-white px-4 py-2 rotate-3 font-black text-sm border-3 border-ink-black shadow-lg">
                PRESIDENTIAL SCHOLAR!
              </div>
              <div className="relative z-10">
                <div className="inline-block bg-ninja-blue text-manga-white px-3 py-1 text-xs font-bold uppercase mb-4 border-2 border-ink-black dark:border-manga-white">
                  STUDENT & RESEARCHER
                </div>
                <h1 className="text-5xl lg:text-7xl font-black mb-4 burst-title uppercase leading-tight">
                  RASTRABHUSHAN
                  <br />
                  <span className="text-naruto-orange">DAHAL</span>
                </h1>
                <p className="text-xl font-bold mb-6 text-muted-foreground uppercase tracking-wide">
                  "BELIEVE IN YOUR DATA!"
                </p>
                <p className="text-lg mb-8 leading-relaxed">
                  Electrical Engineering student with CS focus at{" "}
                  <span className="font-bold text-naruto-orange">Texas State University</span>. Specializing in Machine
                  Learning, EEG Analysis & Data Science with a perfect 4.0 GPA!
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="font-black uppercase bg-naruto-orange hover:bg-naruto-orange/90 text-manga-white border-3 border-ink-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all"
                  >
                    <a href="#projects">VIEW MISSIONS</a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="font-black uppercase border-3 border-ink-black dark:border-naruto-orange shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,140,0,0.3)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all bg-transparent"
                  >
                    <a href="#contact">GET IN TOUCH</a>
                  </Button>
                </div>
              </div>
              {/* Speech bubble decoration */}
              <div className="absolute bottom-8 right-8 hidden lg:block">
                <div className="relative bg-manga-white dark:bg-card border-3 border-ink-black dark:border-naruto-orange rounded-2xl p-4 shadow-lg">
                  <div className="absolute -bottom-3 right-8 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-ink-black dark:border-t-naruto-orange" />
                  <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-[13px] border-l-transparent border-r-[13px] border-r-transparent border-t-[13px] border-t-manga-white dark:border-t-card" />
                  <p className="font-bold text-sm">4.0 GPA • HACKATHON WINNER</p>
                </div>
              </div>
            </div>

            {/* Side panel with character illustration placeholder */}
            <div className="space-y-6">
              <div className="manga-card bg-ninja-blue text-manga-white p-6 relative overflow-hidden h-full min-h-[300px] flex flex-col justify-between">
                <div>
                  <div className="font-black text-2xl mb-2 uppercase">NARUTO STYLE!</div>
                  <p className="text-sm opacity-90 mb-4">
                    Never give up on your projects, believe in your code, and always push forward!
                  </p>
                </div>
                {/* Placeholder for Naruto character - using query parameter for image generation */}
                <div className="relative w-full h-48 bg-naruto-orange/20 border-3 border-manga-white rounded-lg overflow-hidden">
                  <img src="/naruto-uzumaki-character-standing-confident-pose-o.jpg" alt="Naruto character" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-manga-white rounded-full border-3 border-ink-black flex items-center justify-center">
                  <Zap className="w-6 h-6 text-naruto-orange" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="manga-divider max-w-7xl mx-auto" />

      {/* Recent Updates & Profile section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Achievements */}
            <div className="lg:col-span-2">
              <div className="manga-card bg-card p-6 mb-6">
                <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-naruto-orange" />
                  RECENT ACHIEVEMENTS
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border-2 border-border">
                    <div className="w-2 h-2 bg-naruto-orange rounded-full mt-2" />
                    <div>
                      <div className="font-bold uppercase text-sm text-naruto-orange mb-1">RiverHacks Winner</div>
                      <p className="text-sm">
                        Won hackathon with XGBoost-based exoplanet exploration model. Built data pipeline and deployed
                        FastAPI prediction service.
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">OCTOBER 2025</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border-2 border-border">
                    <div className="w-2 h-2 bg-ninja-blue rounded-full mt-2" />
                    <div>
                      <div className="font-bold uppercase text-sm text-ninja-blue mb-1">EEG Research Published</div>
                      <p className="text-sm">
                        Conducting groundbreaking research on sleep-related neural signals using Python-based signal
                        processing pipelines.
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">2024 – PRESENT</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg border-2 border-border">
                    <div className="w-2 h-2 bg-naruto-orange rounded-full mt-2" />
                    <div>
                      <div className="font-bold uppercase text-sm text-naruto-orange mb-1">
                        Presidential Scholarship
                      </div>
                      <p className="text-sm">
                        Awarded full-tuition merit scholarship for outstanding academic performance in Computer Science.
                      </p>
                      <div className="text-xs text-muted-foreground mt-2">AUGUST 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile stats panel */}
            <div className="space-y-6">
              <div className="manga-card bg-card p-6">
                <h3 className="font-black uppercase text-lg mb-4 border-b-2 border-border pb-2">NINJA STATS</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">LEVEL</span>
                    <span className="text-xl font-black text-naruto-orange">GENIUS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">GPA</span>
                    <span className="text-xl font-black text-ninja-blue">4.0</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">PROJECTS</span>
                    <span className="text-xl font-black text-naruto-orange">4+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-bold">HACKATHONS</span>
                    <span className="text-xl font-black text-ninja-blue">WON 1</span>
                  </div>
                </div>
              </div>

              <div className="manga-card bg-naruto-orange text-manga-white p-6 text-center">
                <div className="font-black text-4xl mb-2">🍥</div>
                <p className="font-bold text-sm uppercase">Ramen Fueled Coding</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="manga-divider max-w-7xl mx-auto" />

      {/* Projects/Missions section - Manga grid layout */}
      <section id="projects" className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">
              <span className="text-naruto-orange">COMPLETED</span> MISSIONS
            </h2>
            <p className="text-lg text-muted-foreground">Epic projects from the code battlefield</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Project 1 - Beyond Blue */}
            <div className="manga-card bg-card p-0 overflow-hidden action-effect group">
              <div className="relative h-48 bg-gradient-to-br from-naruto-orange to-ninja-blue overflow-hidden">
                <img
                  src="/space-exoplanet-stars-digital-art.jpg"
                  alt="Beyond Blue project"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-naruto-orange text-manga-white px-3 py-1 text-xs font-black uppercase border-2 border-ink-black rotate-3">
                  WINNER
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black uppercase mb-2">BEYOND BLUE</h3>
                <div className="text-xs text-muted-foreground font-bold mb-3 uppercase">RiverHacks • Oct 2025</div>
                <p className="text-sm mb-4 leading-relaxed">
                  XGBoost model for exoplanet discovery with data cleaning, feature engineering, and FastAPI deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="comic-badge bg-naruto-orange/10 text-naruto-orange border-naruto-orange">
                    PYTHON
                  </Badge>
                  <Badge className="comic-badge bg-ninja-blue/10 text-ninja-blue border-ninja-blue">XGBOOST</Badge>
                  <Badge className="comic-badge bg-muted text-foreground border-border">FASTAPI</Badge>
                </div>
              </div>
            </div>

            {/* Project 2 - Adaptly */}
            <div className="manga-card bg-card p-0 overflow-hidden action-effect group">
              <div className="relative h-48 bg-gradient-to-br from-ninja-blue to-purple-500 overflow-hidden">
                <img
                  src="/financial-charts-data-analysis-graphs.jpg"
                  alt="Adaptly project"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black uppercase mb-2">ADAPTLY</h3>
                <div className="text-xs text-muted-foreground font-bold mb-3 uppercase">HackTexas • Oct 2025</div>
                <p className="text-sm mb-4 leading-relaxed">
                  Financial analysis of Toyota Financial Services with performance indicators and trend visualization.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="comic-badge bg-naruto-orange/10 text-naruto-orange border-naruto-orange">
                    PYTHON
                  </Badge>
                  <Badge className="comic-badge bg-ninja-blue/10 text-ninja-blue border-ninja-blue">PANDAS</Badge>
                  <Badge className="comic-badge bg-muted text-foreground border-border">MATPLOTLIB</Badge>
                </div>
              </div>
            </div>

            {/* Project 3 - CaliHome */}
            <div className="manga-card bg-card p-0 overflow-hidden action-effect group">
              <div className="relative h-48 bg-gradient-to-br from-green-500 to-ninja-blue overflow-hidden">
                <img
                  src="/california-houses-real-estate-property.jpg"
                  alt="CaliHome project"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black uppercase mb-2">CALIHOME</h3>
                <div className="text-xs text-muted-foreground font-bold mb-3 uppercase">Personal • Sep 2025</div>
                <p className="text-sm mb-4 leading-relaxed">
                  Random Forest model predicting California housing prices with Streamlit deployment.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="comic-badge bg-naruto-orange/10 text-naruto-orange border-naruto-orange">
                    PYTHON
                  </Badge>
                  <Badge className="comic-badge bg-ninja-blue/10 text-ninja-blue border-ninja-blue">SCIKIT-LEARN</Badge>
                  <Badge className="comic-badge bg-muted text-foreground border-border">STREAMLIT</Badge>
                </div>
              </div>
            </div>

            {/* Project 4 - EEG Classifier */}
            <div className="manga-card bg-card p-0 overflow-hidden action-effect group">
              <div className="relative h-48 bg-gradient-to-br from-purple-500 to-naruto-orange overflow-hidden">
                <img
                  src="/brain-waves-eeg-neural-signals-medical.jpg"
                  alt="EEG project"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-black uppercase mb-2">EEG CLASSIFIER</h3>
                <div className="text-xs text-muted-foreground font-bold mb-3 uppercase">Personal • Aug 2025</div>
                <p className="text-sm mb-4 leading-relaxed">
                  Streamlit app using MNE-Python for EEG processing and schizophrenia prediction.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="comic-badge bg-naruto-orange/10 text-naruto-orange border-naruto-orange">
                    PYTHON
                  </Badge>
                  <Badge className="comic-badge bg-ninja-blue/10 text-ninja-blue border-ninja-blue">MNE</Badge>
                  <Badge className="comic-badge bg-muted text-foreground border-border">STREAMLIT</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="manga-divider max-w-7xl mx-auto" />

      {/* Skills/Jutsu section */}
      <section id="skills" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">
              MY <span className="text-naruto-orange">JUTSU</span> ARSENAL
            </h2>
            <p className="text-lg text-muted-foreground">Mastered skills and techniques</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Programming Jutsu */}
            <div className="manga-card bg-card p-6 chakra-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-naruto-orange rounded-full border-3 border-ink-black dark:border-manga-white flex items-center justify-center">
                  <Code className="w-6 h-6 text-manga-white" />
                </div>
                <h3 className="text-xl font-black uppercase">CODING JUTSU</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded border-2 border-border">
                  <div className="font-bold text-sm mb-2 uppercase">Primary</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="comic-badge">Python</Badge>
                    <Badge className="comic-badge">NumPy</Badge>
                    <Badge className="comic-badge">pandas</Badge>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded border-2 border-border">
                  <div className="font-bold text-sm mb-2 uppercase">Secondary</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="comic-badge">scikit-learn</Badge>
                    <Badge className="comic-badge">FastAPI</Badge>
                    <Badge className="comic-badge">Git</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* ML Jutsu */}
            <div className="manga-card bg-card p-6 chakra-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-ninja-blue rounded-full border-3 border-ink-black dark:border-manga-white flex items-center justify-center">
                  <Brain className="w-6 h-6 text-manga-white" />
                </div>
                <h3 className="text-xl font-black uppercase">ML JUTSU</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded border-2 border-border">
                  <div className="font-bold text-sm mb-2 uppercase">Algorithms</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="comic-badge">XGBoost</Badge>
                    <Badge className="comic-badge">Random Forest</Badge>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded border-2 border-border">
                  <div className="font-bold text-sm mb-2 uppercase">Tasks</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="comic-badge">Classification</Badge>
                    <Badge className="comic-badge">Regression</Badge>
                    <Badge className="comic-badge">Time Series</Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Jutsu */}
            <div className="manga-card bg-card p-6 chakra-glow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-naruto-orange rounded-full border-3 border-ink-black dark:border-manga-white flex items-center justify-center">
                  <Zap className="w-6 h-6 text-manga-white" />
                </div>
                <h3 className="text-xl font-black uppercase">SPECIAL JUTSU</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-muted/50 rounded border-2 border-border">
                  <div className="font-bold text-sm mb-2 uppercase">Core Skills</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="comic-badge">Signal Processing</Badge>
                    <Badge className="comic-badge">EEG Analysis</Badge>
                  </div>
                </div>
                <div className="p-3 bg-muted/50 rounded border-2 border-border">
                  <div className="font-bold text-sm mb-2 uppercase">Visualization</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="comic-badge">Data Viz</Badge>
                    <Badge className="comic-badge">Statistics</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="manga-divider max-w-7xl mx-auto" />

      {/* About/Story section */}
      <section id="about" className="py-12 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-black uppercase mb-6">
                MY <span className="text-naruto-orange">NINJA WAY</span>
              </h2>
              <div className="ninja-scroll mb-6">
                <p className="font-bold text-lg mb-3">BACKSTORY</p>
                <p className="leading-relaxed mb-4">
                  I'm pursuing a Bachelor of Science in Electrical Engineering with a concentration in Computer Science
                  and a minor in Physics at <span className="font-bold">Texas State University</span>. With a perfect
                  4.0 GPA and Presidential Scholar status, I'm committed to excellence in academics and research.
                </p>
                <p className="leading-relaxed">
                  My journey spans from winning hackathons like RiverHacks to conducting cutting-edge EEG research. I'm
                  fascinated by the intersection of machine learning, signal processing, and neuroscience.
                </p>
              </div>

              <div className="manga-card bg-card p-6">
                <h3 className="font-black uppercase text-lg mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-naruto-orange" />
                  CURRENT MISSION
                </h3>
                <div className="space-y-3 text-sm">
                  <p>
                    <span className="font-bold text-naruto-orange">🔬 Research:</span> Working on large-scale EEG
                    datasets, focusing on sleep-related neural signals
                  </p>
                  <p>
                    <span className="font-bold text-ninja-blue">💻 Development:</span> Building Python-based pipelines
                    for signal processing and ML analysis
                  </p>
                  <p>
                    <span className="font-bold text-naruto-orange">🎯 Goal:</span> Investigating relationships between
                    EEG features and clinical variables
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Education panel */}
              <div className="manga-card bg-card p-6">
                <h3 className="font-black uppercase text-xl mb-4 border-b-3 border-naruto-orange pb-2">EDUCATION</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-black uppercase">B.S. Electrical Engineering</div>
                        <div className="text-sm text-muted-foreground">Texas State University</div>
                      </div>
                      <Badge className="comic-badge bg-naruto-orange/10 text-naruto-orange border-naruto-orange">
                        2024-2028
                      </Badge>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground">CS Concentration • Physics Minor</p>
                      <p className="font-bold text-naruto-orange">GPA: 4.0</p>
                    </div>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-black uppercase">High School Diploma</div>
                        <div className="text-sm text-muted-foreground">National Board, Nepal</div>
                      </div>
                      <Badge className="comic-badge bg-ninja-blue/10 text-ninja-blue border-ninja-blue">2024</Badge>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>GPA: 3.6 • IELTS: 8 • SAT: 1430</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Character illustration panel */}
              <div className="manga-card bg-gradient-to-br from-naruto-orange via-ninja-blue to-naruto-orange p-1">
                <div className="bg-card h-full p-6">
                  <div className="relative h-64 bg-muted rounded-lg overflow-hidden border-3 border-border">
                    <img src="/naruto-uzumaki-training-determined-focused-ninja.jpg" alt="Training scene" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-center font-bold uppercase mt-4 text-sm">
                    "THE CODE NEVER GIVES UP ON ME, AND I NEVER GIVE UP ON THE CODE!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="manga-divider max-w-7xl mx-auto" />

      {/* Contact section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="manga-card bg-card p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-naruto-orange via-ninja-blue to-naruto-orange" />
            <h2 className="text-4xl lg:text-5xl font-black uppercase mb-4">
              LET'S <span className="text-naruto-orange">TEAM UP!</span>
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Ready for new missions, collaborations, and research projects!
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="font-black uppercase bg-naruto-orange hover:bg-naruto-orange/90 text-manga-white border-3 border-ink-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all"
              >
                <a href="mailto:rdb200@txstate.edu">
                  <Mail className="w-5 h-5 mr-2" />
                  EMAIL ME
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-black uppercase border-3 border-ink-black dark:border-naruto-orange shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all bg-transparent"
              >
                <a href="https://www.linkedin.com/in/rastrabhushan-dahal/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LINKEDIN
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="font-black uppercase border-3 border-ink-black dark:border-naruto-orange shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] transition-all bg-transparent"
              >
                <a href="https://github.com/11hritik11" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GITHUB
                </a>
              </Button>
            </div>
            <div className="flex gap-6 justify-center text-muted-foreground">
              <a
                href="https://github.com/11hritik11"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-naruto-orange transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/rastrabhushan-dahal/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-naruto-orange transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:rdb200@txstate.edu" className="hover:text-naruto-orange transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-ink-black dark:border-naruto-orange bg-muted/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-bold uppercase text-sm">
            © 2025 Rastrabhushan Dahal • Built with <span className="text-naruto-orange">❤️</span> and lots of ramen
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Powered by Next.js • Styled with Tailwind CSS • Inspired by Naruto
          </p>
        </div>
      </footer>
    </div>
  )
}
