from pydantic import BaseModel
from typing import List

class CandidateInput(BaseModel):
    name: str
    skills: List[str]

class JobInput(BaseModel):
    title: str
    required_skills: List[str]

class MatchResult(BaseModel):
    match_score: float
    explanation: str
