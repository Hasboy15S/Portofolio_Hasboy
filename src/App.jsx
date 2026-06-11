import { ThemeProvider } from './context/ThemeContext'
import Navbar     from './Components/Navbar/Navbar'
import Hero       from './Components/Hero/Hero'
import About      from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Portfolio  from './Components/Portfolio/Portfolio'
import Contact    from './Components/Contact/Contact'
import Footer     from './Components/Footer/Footer'
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
