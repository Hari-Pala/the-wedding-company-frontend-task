import { motion as MOTION } from 'framer-motion'

export default function QuestionCard({
  index,
  question,
  selectedIndex,
  onSelect,
}) {
  return (
    <MOTION.div
  role="group"
  aria-labelledby={`q-${question.id}`}
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.35, ease: 'easeOut' }}
  className="mx-auto flex w-full max-w-[900px] flex-col space-y-4"
>
  <div
    id={`q-${question.id}`}
    className="rounded-[12px] h-[65px] flex justify-center items-center border border-[#96e5ff] bg-gradient-to-r from-[#c6e9f7] to-[#e5f8ff] px-6 py-5 text-center text-[22px] font-semibold tracking-[-0.012em] text-[#15313d]" style={{ marginTop: '10px' }}
  >
    {index + 1}. {question.text}
  </div>

  <div role="radiogroup" aria-label="Options" className="p-2">
    <div className="space-y-4">
      {question.options.map((opt, i) => {
        const active = selectedIndex === i
        return (
          <label
            key={opt}
             style={{ marginTop: '10px' }}
            className={`h-[65px] flex justify-center items-center block cursor-pointer select-none rounded-[12px] border px-8 py-5 text-[20px] font-semibold text-[#15313d] transition-all ${
              active
                ? 'border-[#96e5ff] bg-gradient-to-r from-[#ecf5ff] to-[#d7efff]'
                : 'border-[rgba(150,229,255,0.5)] bg-white/85 hover:bg-[#f2f7ff]'
            }`}
          >
            <span className="flex w-full items-center justify-center text-center">
              {opt}
            </span>
            <input
              type="radio"
              name={`q-${question.id}`}
              aria-label={opt}
              checked={active}
              onChange={() => onSelect(i)}
              className="sr-only"
            />
          </label>
        )
      })}
    </div>
  </div>
</MOTION.div>

  )
}
