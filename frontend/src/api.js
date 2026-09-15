const API_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000";

export async function findMatch(
  candidate,
  job
) {
  const response = await fetch(
    `${API_URL}/match`,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        candidate,
        job
      })
    }
  );

  if (!response.ok) {
    throw new Error(
      "Matching request failed"
    );
  }

  return response.json();
}