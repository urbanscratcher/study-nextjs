"use client";

function error({ error }) {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch meal data. Please try later</p>
    </main>
  );
}

export default error;
