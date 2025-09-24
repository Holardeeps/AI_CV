
type Suggestion = {
  type: "good" | "improve";
  tip: string;
};

interface AtsProps {
  score: number;
  suggestions: Suggestion[];
}

const getGradient = (score: number) => {
  if (score >= 69) return "from-green-100 to-green-300";
  if (score >= 50) return "from-yellow-100 to-yellow-300";
  return "from-red-100 to-red-300";
};

const getIcon = (score: number) => {
  if (score >= 69) return "/icons/ats-good.svg";
  if (score >= 50) return "/icons/ats-warning.svg";
  return "/icons/ats-bad.svg";
};

const getHeadline = (score: number) => `ATS Score - ${score}/100`;

const Ats: React.FC<AtsProps> = ({ score, suggestions }) => {
  return (
    <div
      className={`w-full max-w-xl mx-auto rounded-2xl shadow-lg bg-gradient-to-br ${getGradient(
        score
      )} p-6 md:p-10 flex flex-col gap-6`}
    >
      {/* Top Section */}
      <div className="flex items-center gap-4">
        <img
          src={getIcon(score)}
          alt="ATS Score Icon"
          width={56}
          height={56}
          className="w-14 h-14"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{getHeadline(score)}</h2>
          <span className="block text-sm text-gray-600">
            {score >= 69
              ? "Excellent match!"
              : score >= 50
              ? "Decent, but can improve."
              : "Needs significant improvement."}
          </span>
        </div>
      </div>

      {/* Description Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">How to improve your ATS score</h3>
        <p className="text-gray-600 mb-4">
          The ATS (Applicant Tracking System) score reflects how well your CV matches the job description. Review the suggestions below to boost your chances of passing automated screenings.
        </p>
        <ul className="space-y-3 mb-4">
          {suggestions.map((s, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <img
                src={s.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"}
                alt={s.type === "good" ? "Good" : "Improve"}
                width={20}
                height={20}
                className="mt-1"
              />
              <span className={s.type === "good" ? "text-green-700" : "text-yellow-800"}>
                {s.tip}
              </span>
            </li>
          ))}
        </ul>
        <div className="text-sm text-gray-700 font-medium">
          Keep refining your CV for the best results!
        </div>
      </div>
    </div>
  );
};

export default Ats;
