function MatchResults({ result }) {

  return (
    <section
      className="results-card"
      aria-label="AI match results"
    >

      <div className="results-header">

        <div>

          <p className="eyebrow">
            AI RECOMMENDATION
          </p>

          <h2>
            Match Results
          </h2>

        </div>

        <div
          className="match-score"
          aria-label={`Match score ${result.match_score} percent`}
        >
          {result.match_score}%
        </div>

      </div>

      <div className="results-grid">

        <div className="result-section">

          <h3>
            Matched Skills
          </h3>

          {result.matched_skills?.length ? (

            <ul>

              {result.matched_skills.map(
                (skill) => (
                  <li key={skill}>

                    <span
                      className="success-icon"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    {skill}

                  </li>
                )
              )}

            </ul>

          ) : (

            <p>
              No matching skills found.
            </p>

          )}

        </div>

        <div className="result-section">

          <h3>
            Skill Gaps
          </h3>

          {result.missing_skills?.length ? (

            <ul>

              {result.missing_skills.map(
                (skill) => (
                  <li key={skill}>

                    <span
                      className="warning-icon"
                      aria-hidden="true"
                    >
                      !
                    </span>

                    {skill}

                  </li>
                )
              )}

            </ul>

          ) : (

            <p>
              No major skill gaps identified.
            </p>

          )}

        </div>

      </div>

      <div className="explanation">

        <h3>
          Recommendation Explanation
        </h3>

        <p>
          {result.explanation}
        </p>

      </div>

    </section>
  );
}

export default MatchResults;