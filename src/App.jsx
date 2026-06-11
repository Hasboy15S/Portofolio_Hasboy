import { ThemeProvider } from './context/ThemeContext'
import Navbar     from './components/Navbar/Navbar'
import Hero       from './components/Hero/Hero'
import About      from './components/About/About'
import Experience from './components/Experience/Experience'
import Portfolio  from './components/Portfolio/Portfolio'
import Contact    from './components/Contact/Contact'
import Footer     from './components/Footer/Footer'
import './index.css'

export default function App() {
  return (
    <ThemeProvider>
      {/*
        Tailwind dark mode strategy: 'class'
        Pastikan tailwind.config.js sudah: darkMode: 'class'
      */}
      <div className="bg-gray-50 dark:bg-[#0a0a0f] text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
