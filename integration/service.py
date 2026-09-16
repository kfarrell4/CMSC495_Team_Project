from .schemas import CandidateInput, JobInput, MatchResult

def compute_match(candidate: CandidateInput, job: JobInput) -> MatchResult:
    candidate_skills = set(candidate.skills)
    job_skills = set(job.required_skills)

    overlap = candidate_skills.intersection(job_skills)
    score = len(overlap) / len(job_skills) if len(job_skills) > 0 else 0.0

    explanation = (
        f"Matched skills: {', '.join(overlap)}. "
        f"Missing skills: {', '.join(job_skills - candidate_skills)}."
    )

    return MatchResult(match_score=score, explanation=explanation)
