export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="px-0">
        <nav className="mt-0 flex w-[100vw] items-center justify-end gap-6 border-b border-border/60 bg-background/70 px-6 py-3 backdrop-blur">
          <a className="opacity-90 hover:opacity-100 transition" href="mailto:hernan.s.chalco@gmail.com">Email</a>
          <a className="opacity-90 hover:opacity-100 transition" href="https://www.linkedin.com/in/hernanchalco" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="opacity-90 hover:opacity-100 transition" href="https://github.com/i-am-hernan" target="_blank" rel="noreferrer">GitHub</a>
          <a className="opacity-90 hover:opacity-100 transition" href="/resume.txt" target="_blank" rel="noreferrer">Resume</a>
        </nav>
      </div>
    </header>
  );
}
