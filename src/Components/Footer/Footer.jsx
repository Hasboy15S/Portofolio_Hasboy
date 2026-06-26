export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/5 px-4 sm:px-6 py-6 max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 dark:text-gray-500">
      <span>© {new Date().getFullYear()} Muhammad Hasbi · Hataku</span>
      <span>Built with React & Tailwind CSS</span>
    </footer>
  )
}
