"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-base-200 text-center">
      <div className="card shadow-xl bg-white p-8 max-w-md">
        <h1 className="text-6xl font-bold text-error mb-4">404</h1>
        <p className="text-lg text-gray-700 mb-6">Sorry, the page you&apos;re looking for doesn't exist.</p>
        <button
          onClick={() => router.push("/")}
          className="btn btn-primary w-full"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
