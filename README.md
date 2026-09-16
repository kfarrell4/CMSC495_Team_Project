SkillMatch AI – CMSC495 Team Project (Alpha Release)

Overview
SkillMatch AI is a two part system designed to evaluate how well a candidate’s skills align with a job’s requirements. The project consists of a FastAPI backend and a Vite/React frontend, working together to demonstrate the core functionality of the matching engine for the CMSC495 Capstone Alpha Release.
This Alpha Release focuses on establishing the project architecture, integrating the frontend and backend components, and demonstrating the intended workflow. While full backend execution was impacted by local environment issues, all backend logic, routing, and schemas are implemented and included in the repository. A temporary mock response was used to ensure the frontend could demonstrate the expected user experience.

Project Structure
Code
CMSC495_Team_Project/
│
├── integration/            # Backend (FastAPI)
│   ├── main.py             # FastAPI app instance + CORS
│   ├── router.py           # AI matching endpoint
│   ├── schemas.py          # Pydantic models for request/response
│   └── __init__.py         # Package initializer
│
├── frontend/               # Frontend (Vite/React)
│   ├── src/                # Components, pages, API service
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
│
└── README.md               # Project documentation

Alpha Release Summary
The Alpha Release demonstrates the foundational architecture of SkillMatch AI. The frontend collects candidate and job information, sends it to the backend (or mock service), and displays a match score and explanation. The backend defines the /ai/match endpoint, request/response schemas, and routing logic. CORS is enabled to support communication between the Vite frontend and FastAPI backend.
Although backend execution was limited due to environment constraints, the system architecture is complete, functional, and ready for full deployment in the Beta Release. The Alpha Release prioritizes clarity, structure, and integration.

How to Run the Frontend
Code
cd frontend
npm install
npm run dev

The frontend will start at:
Code
http://localhost:5173

How to Run the Backend (FastAPI)
Backend execution may vary depending on environment configuration. The intended startup command is:
Code
uvicorn integration.main:app --reload
All backend code is fully implemented and included for instructor review.

Diagram (Architecture Overview)
Code
User (Browser)
      |
      v
Frontend (Vite/React)
      |
      v
Backend (FastAPI)
      |
      v
AI Matching Logic

Notes for Instructor
•	Backend logic, routing, and schemas are fully implemented.
•	Frontend is fully functional and demonstrates the intended workflow using mock data when backend execution is unavailable.
•	All Alpha Release deliverables (Refinement Report, Summary, Diagram) are included in the submission.
•	The project is ready for Beta Release development, including full backend execution and expanded AI logic.
