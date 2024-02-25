"use client";

function error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to save your meal</p>
    </main>
  );
}

export default error;
