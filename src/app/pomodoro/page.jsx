"use client"
import React from "react"
import PomodoroTimer from "../components/PomodoroTimer"

function PomodoroPage() {
  return (
    <div className="flex flex-col gap-10 w-3/4 mx-auto">
      <PomodoroTimer />
    </div>
  )
}

export default PomodoroPage