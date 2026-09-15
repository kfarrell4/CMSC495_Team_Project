import { useState } from "react";

function CandidateForm({ onChange }) {

  const [name, setName] =
    useState("");

  const [skills, setSkills] =
    useState("");

  const [experience, setExperience] =
    useState("");

  function buildCandidate(
    newName,
    newSkills,
    newExperience
  ) {

    return {
      name: newName,

      skills: newSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean),

      experience: newExperience
    };
  }

  function handleNameChange(event) {

    const value =
      event.target.value;

    setName(value);

    onChange(
      buildCandidate(
        value,
        skills,
        experience
      )
    );
  }

  function handleSkillsChange(event) {

    const value =
      event.target.value;

    setSkills(value);

    onChange(
      buildCandidate(
        name,
        value,
        experience
      )
    );
  }

  function handleExperienceChange(event) {

    const value =
      event.target.value;

    setExperience(value);

    onChange(
      buildCandidate(
        name,
        skills,
        value
      )
    );
  }

  return (
    <section
      id="candidate"
      className="card"
    >

      <div className="card-heading">

        <h2>
          Candidate Profile
        </h2>

        <p>
          Enter the candidate's skills
          and professional experience.
        </p>

      </div>

      <label>
        Candidate Name

        <input
          type="text"
          placeholder="e.g. Sarah Johnson"
          value={name}
          onChange={handleNameChange}
        />

      </label>

      <label>
        Skills

        <input
          type="text"
          placeholder="Python, SQL, Machine Learning"
          value={skills}
          onChange={handleSkillsChange}
        />

        <span className="field-help">
          Separate multiple skills with commas.
        </span>

      </label>

      <label>
        Experience

        <textarea
          placeholder="Describe relevant experience..."
          value={experience}
          onChange={
            handleExperienceChange
          }
        />

      </label>

    </section>
  );
}

export default CandidateForm;