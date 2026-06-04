"use client";

import { useRouter } from "next/navigation";

export function ProjectBackButton() {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/projects");
    }
  }

  return (
    <button
      onClick={handleBack}
      className="proj-back"
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 1.5 3.5 6.5l5 5" />
      </svg>
      Back
    </button>
  );
}
