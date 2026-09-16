import { useState } from "react";

function JobForm({ onChange }) {

  const [title, setTitle] =
    useState("");

  const [skills, setSkills] =
    useState("");

  function buildJob(
    newTitle,
    newSkills
  ) {

    return {
      title: newTitle,

      required_skills: newSkills
        .split(",")
        .map((skill) => skill.trim())
        .filter(Boolean)
    };
  }

  function handleTitleChange(event) {

    const value =
      event.target.value;

    setTitle(value);

    onChange(
      buildJob(
        value,
        skills
      )
    );
  }

  function handleSkillsChange(event) {

    const value =
      event.target.value;

    setSkills(value);

    onChange(
      buildJob(
        title,
        value
      )
    );
  }

  return (
    <section
      id="job"
      className="card"
    >

      <div className="card-heading">

        <h2>
          Job Opportunity
        </h2>

        <p>
          Enter the requirements for
          the position.
        </p>

      </div>

      <label>
        Job Title

        <input
          type="text"
          placeholder="e.g. Data Analyst"
          value={title}
          onChange={handleTitleChange}
        />

      </label>

      <label>
        Required Skills

        <input
          type="text"
          placeholder="SQL, Python, Excel"
          value={skills}
          onChange={
            handleSkillsChange
          }
        />

        <span className="field-help">
          Separate multiple skills with commas.
        </span>

      </label>

    </section>
  );
}

export default JobForm;