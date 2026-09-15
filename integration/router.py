from fastapi import APIRouter
from .schemas import CandidateInput, JobInput, MatchResult
from .service import compute_match

router = APIRouter(prefix="/ai", tags=["AI Recommendation Engine"])

@router.post("/match", response_model=MatchResult)
def match_candidate_job(candidate: CandidateInput, job: JobInput):
    return compute_match(candidate, job)
