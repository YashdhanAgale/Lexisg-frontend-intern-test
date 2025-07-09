import { useState } from "react";

export default function LegalAssistant() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      const response = {
        answer:
          "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.",
        citations: [
          {
            text: "as the age of the deceased at the time of accident was held to be about 54–55 years by the learned Tribunal, being self-employed, as such, 10% of annual income should have been awarded on account of future prospects. (Para 7 of the document)",
            source: "Dani_Devi_v_Pritam_Singh.pdf",
            link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz",
          },
        ],
      };
      setResponse(response);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Lexi Legal Assistant
        </h1>

        {/* Input Panel */}
        <div className="bg-white shadow-md rounded-xl p-4 mb-6">
          <textarea
            placeholder="Ask a legal question..."
            className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            rows={5}
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit"
            )}
          </button>
        </div>

        {/* Answer Panel */}
        {response && (
          <div className="bg-white rounded-xl shadow-md p-6 space-y-4">
            <div className="text-gray-700">
              <strong>Answer:</strong> {response.answer}
            </div>

            <div className="pt-2 border-t text-sm text-gray-600">
              <strong>Citation:</strong>
              <p className="mt-2">"{response.citations[0].text}"</p>
              <a
                href={response.citations[0].link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                Open PDF ({response.citations[0].source})
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
