export default function ProgressBar({ current, total }) {
  return (
    <div className="w-full" aria-label="Quiz progress">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center gap-4">
          {Array.from({ length: total }).map((_, i) => {
            const isComplete = i < current
            const isActive = i === current

            return (
              <div key={i} className="relative flex-1">
                {/* Base track */}
                <div className="h-[0.125rem] w-full rounded-full bg-[#e3e3e3]" />

                {/* Progress segment */}
                <div
                  className={`absolute left-0 top-1/2 -translate-y-1/2 h-[0.5rem] rounded-full transition-all duration-300
                    ${
                      isActive
                        ? 'w-1/2 bg-[#15313d]'
                        : isComplete
                        ? 'w-full bg-[#2b5174]'
                        : 'w-0'
                    }`}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
