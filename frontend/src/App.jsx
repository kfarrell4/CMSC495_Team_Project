import { useState } from "react";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import CandidateForm from "./components/CandidateForm";
import JobForm from "./components/JobForm";
import MatchResults from "./components/MatchResults";

import { findMatch } from "./api";

function App() {
  const [candidate, setCandidate] = useState(null);
  const [job, setJob] = useState(null);

  const [result, setResult] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleMatch() {
    if (!candidate || !job) {
      setError(
        "Please enter both candidate and job information."
      );
      return;
    }

    if (
      !candidate.name.trim() ||
      candidate.skills.length === 0 ||
      !job.title.trim() ||
      job.required_skills.length === 0
    ) {
      setError(
        "Please complete the candidate and job fields before matching."
      );
      return;
    }

    setError("");
    setResult(null);
    setLoading(true);

    try {
      const response = await findMatch(
        candidate,
        job
      );

      setResult(response);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to connect to SkillMatch AI. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">

      <Navbar />

      <main className="container">

        <Dashboard />

        <section className="input-grid">

          <CandidateForm
            onChange={setCandidate}
          />

          <JobForm
            onChange={setJob}
          />

        </section>

        <section
          id="matching"
          className="matching-action"
        >

          <button
            className="primary-button"
            onClick={handleMatch}
            disabled={loading}
          >
            {loading
              ? "Analyzing..."
              : "Find AI Match"}
          </button>

        </section>

        {error && (
          <div
            className="error-message"
            role="alert"
          >
            {error}
          </div>
        )}

        {result && (
          <MatchResults
            result={result}
          />
        )}

      </main>

    </div>
  );
}

export default App;