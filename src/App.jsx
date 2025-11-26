import { useState } from 'react'
import Quiz from './components/Quiz'
import './index.css'

const GLOW_FIELDS = [
  { className: 'w-[912px] h-[912px] -left-32 -top-72', color: '#86A5DF' },
  { className: 'w-[760px] h-[760px] -left-36 top-96', color: '#90E0EF' },
  { className: 'w-[933px] h-[933px] right-10 -top-80', color: '#00B4D8' },
  { className: 'w-[862px] h-[862px] left-32 top-40', color: '#0077B6' },
  { className: 'w-[862px] h-[1390px] right-10 -top-10', color: '#CAF0F8' },
]

function BackgroundDecor({ showCloud }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {GLOW_FIELDS.map((blob, idx) => (
        <div
          key={idx}
          className={`glow ${blob.className}`}
          style={{ background: blob.color }}
        />
      ))}
      {showCloud && <div className="cloud-ribbon" aria-hidden="true" />}
    </div>
  )
}

function App() {
  const [stage, setStage] = useState(1)

  return (
    <div className="aurora-bg  ">
      <BackgroundDecor showCloud={stage >= 5} />
      <main className="z-10 h-screen flex  items-center justify-center px-4 py-10">
        <Quiz onStageChange={setStage} />
      </main>
    </div>
  )
}

export default App
