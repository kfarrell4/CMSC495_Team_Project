from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from integration.router import router as ai_router

app = FastAPI()

# Allow frontend to call backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register AI module
app.include_router(ai_router)

@app.get("/")
def root():
    return {"message": "SkillMatch AI Alpha Release"}
