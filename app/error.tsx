"use client";

interface Props {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error:", error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <div className="card w-96 bg-white shadow-xl p-6 text-center">
        <h1 className="text-3xl font-bold text-error mb-4">Oops!</h1>
        <p className="text-gray-600 mb-6">An unexpected error occurred. Please try again.</p>
        <button
          className="btn btn-primary w-full"
          onClick={() => reset()}
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
