import { useCallback, useEffect, useMemo, useState } from "react";
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import FinalScore from "./FinalScore";
import { QUESTIONS, TOTAL } from "../data/questions";

const ArrowIcon = ({ direction = "right" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`h-3 w-3 ${direction === "left" ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Quiz({ onStageChange }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState(Array(TOTAL).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const canPrev = idx > 0 && !submitted;
  const canNext = !submitted; 
  const isLast = idx === TOTAL - 1;

  const scorePct = useMemo(() => {
    const correct = answers.reduce(
      (acc, a, i) => acc + (a === QUESTIONS[i].correctIndex ? 1 : 0),
      0
    );
    return Math.round((correct / TOTAL) * 100);
  }, [answers]);

  const goNext = useCallback(() => {
    if (!canNext) return;
    isLast ? setSubmitted(true) : setIdx((i) => i + 1);
  }, [canNext, isLast]);

  const goPrev = useCallback(() => {
    if (canPrev) setIdx((i) => i - 1);
  }, [canPrev]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft" && canPrev) goPrev();
      if (e.key === "ArrowRight" && !submitted) goNext();
      if (e.key === "Enter" && !submitted) goNext(); 
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [canPrev, goNext, goPrev, submitted]);

  useEffect(() => {
    onStageChange?.(submitted ? TOTAL + 1 : idx + 1);
  }, [idx, submitted, onStageChange]);

  if (submitted) {
    return (
      <FinalScore
        scorePct={scorePct}
        onRestart={() => {
          setIdx(0);
          setAnswers(Array(TOTAL).fill(null));
          setSubmitted(false);
        }}
      />
    );
  }

  return (
    <section
      role="main"
      className="relative flex min-h-screen items-center justify-center overflow-x-hidden p-4"
    >
      <div
        className="relative h-[80vh] w-[80vw] flex items-center justify-center"
        style={{
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: "50px",
          padding: "2.5rem",
        }}
      >
        {idx === 0 && (
          <img
            src="/image.png"
            alt="Quiz intro"
            className="absolute left-[0px] bottom-[10px] w-[250px] h-[250px] object-contain rounded-xl shadow-lg z-10"
          />
        )}

        <div className="h-full w-[98%] overflow-auto rounded-[40px] bg-white">
          <div className="quiz-panel flex h-full flex-col justify-between gap-12 px-4 py-14 text-center sm:px-10 [&>*]:shrink-0">
            
            <div className="mx-auto flex w-[70%] flex-col items-center">
              <h1 className="font-display tracking-tight text-[#15313d] text-[clamp(2.25rem,4.5vw,4.5rem)] leading-[1.1] py-[0.05em] gradient-text dm-serif">
                Test Your Knowledge
              </h1>

              <div
                style={{ marginTop: "-40px", marginBottom: "20px" }}
                className="-m-1 max-w-xl rounded-[8px] bg-white text-lg font-semibold text-[#15313d]"
              >
                Answer all questions to see your results
              </div>
            </div>

            <div className="mx-auto flex-1 w-full max-w-3xl">
              <div className="flex h-full flex-col gap-14 py-6">
                
                <div className="mx-auto flex w-[70%] justify-center">
                  <ProgressBar current={idx} total={TOTAL} />
                </div>

                <div className="mx-auto flex w-[70%] justify-center">
                  <QuestionCard
                    index={idx}
                    question={QUESTIONS[idx]}
                    selectedIndex={answers[idx]}
                    onSelect={(i) => {
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[idx] = i;
                        return next;
                      });
                    }}
                  />
                </div>

                <div className="mx-auto flex w-[70%] justify-end">
                  <div className="flex items-center gap-2 rounded-[10px]">
                    <button
                      onClick={goPrev}
                      disabled={!canPrev}
                      className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-[10px]
                      border border-white/20 bg-gradient-to-r from-[#c6e9f7] to-[#e5f8ff]
                      text-[#15313d] shadow-[0_12px_20px_rgba(21,49,61,0.16)]
                      transition hover:-translate-y-[1px] disabled:opacity-30"
                      style={{ margin: "15px" }}

                    >
                      <ArrowIcon direction="left" />
                    </button>

                    {!isLast ? (
                      <button
                        onClick={goNext}
                        className="inline-flex h-[35px] w-[35px] items-center justify-center rounded-[10px]
                        border border-white/10 bg-gradient-to-r from-[#c6e9f7] to-[#e5f8ff]
                        text-[#15313d] shadow-[0_16px_26px_rgba(21,49,61,0.22)]
                        transition hover:-translate-y-[1px]"
                      >
                        <ArrowIcon />
                      </button>
                    ) : (
                      <button
                        onClick={goNext}
                        className="inline-flex h-[35px] min-w-[70px] items-center justify-center rounded-[10px]
                        border border-white/20 bg-gradient-to-r from-[#c6e9f7] to-[#e5f8ff]
                        text-sm font-semibold text-white
                        shadow-[0_18px_30px_rgba(21,49,61,0.24)]
                        transition hover:-translate-y-[1px]"
                      >
                        Submit
                      </button>
                    )}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
