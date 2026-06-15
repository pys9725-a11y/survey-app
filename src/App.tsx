import { useState } from "react";

const questions = [
  { id: 1, text: "이름이 무엇인가요?" },
  { id: 2, text: "나이가 어떻게 되세요?" },
  { id: 3, text: "이 서비스에 만족하셨나요?", options: ["매우 만족", "만족", "보통", "불만족"] },
  { id: 4, text: "개선할 점이 있다면 적어주세요." },
];

export default function App() {
  const [_answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (id: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h2>✅ 제출 완료!</h2>
        <p>설문에 참여해주셔서 감사합니다.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "sans-serif", padding: "20px" }}>
      <h1>📋 설문조사</h1>
      {questions.map((q) => (
        <div key={q.id} style={{ marginBottom: "24px" }}>
          <p style={{ fontWeight: "bold" }}>{q.id}. {q.text}</p>
          {q.options ? (
            q.options.map((opt) => (
              <label key={opt} style={{ display: "block", marginBottom: "6px" }}>
                <input
                  type="radio"
                  name={`q${q.id}`}
                  value={opt}
                  onChange={(e) => handleChange(q.id, e.target.value)}
                />
                {" "}{opt}
              </label>
            ))
          ) : (
            <input
              type="text"
              placeholder="답변을 입력하세요"
              style={{ width: "100%", padding: "8px", fontSize: "14px" }}
              onChange={(e) => handleChange(q.id, e.target.value)}
            />
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        style={{ padding: "12px 24px", backgroundColor: "#4F46E5", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", cursor: "pointer" }}
      >
        제출하기
      </button>
    </div>
  );
}
