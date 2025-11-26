import { motion as MOTION } from "framer-motion";

export default function FinalScore({ scorePct, onRestart }) {
  return (
    <section className="score-bg flex h-screen w-screen items-center justify-center px-6 py-16">
      <div className="flex flex-col items-center gap-12 text-center">
        {/* Score */}
        <div className="space-y-6">
          <span>Keep Learning!</span>
          <p
            className="
              font-display italic
              text-[52px]
              tracking-tight
              bg-gradient-to-r from-[#15313D] to-[#3CABDA]
              bg-clip-text text-transparent
            "
          >
            Your Final score is
          </p>

          <MOTION.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex items-baseline justify-center gap-4"
            aria-live="polite"
          >
            <span
              className="
                font-display
                text-[160px]
                leading-none
                text-[#266580]
              "
              style={{ marginTop: "-75px", marginBottom: "20px" }}
            >
              {scorePct}
            </span>
            <span
              className="
                font-display italic
                text-[64px]
                leading-none
                tracking-tight
                bg-gradient-to-r from-[#15313D] to-[#3CABDA]
                bg-clip-text text-transparent
              "
            >
              %
            </span>
          </MOTION.div>
        </div>

        {/* Start Again */}
        <button
          onClick={onRestart}
          className="
            result-button
            inline-flex items-center justify-center
            rounded-[10px]
            p-10 !px-5 !py-5
            text-lg font-semibold
            text-[#15313D]
            bg-gradient-to-r from-[#c6e9f7] to-[#e5f8ff]
            border border-[#96E5FF]/50
            transition
          "
          style={{ padding: "12px"}}
        >
          Start Again
        </button>
      </div>
    </section>
  );
}
