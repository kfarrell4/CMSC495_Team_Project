from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_match_endpoint():
    payload = {
        "candidate": {
            "name": "Alice",
            "skills": ["Python", "SQL"]
        },
        "job": {
            "title": "Data Analyst",
            "required_skills": ["Python", "SQL", "Excel"]
        }
    }

    response = client.post("/ai/match", json=payload)
    assert response.status_code == 200

    data = response.json()
    assert "match_score" in data
    assert "explanation" in data
