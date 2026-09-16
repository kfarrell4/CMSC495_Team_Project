function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-inner">

        <div className="logo">
          SkillMatch <span>AI</span>
        </div>

        <nav>

          <a href="#dashboard">
            Dashboard
          </a>

          <a href="#candidate">
            Candidate
          </a>

          <a href="#job">
            Job
          </a>

          <a href="#matching">
            Matching
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;