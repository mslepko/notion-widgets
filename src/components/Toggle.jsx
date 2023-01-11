import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex relative">
      <div
        onClick={() => {
          setEnabled(!enabled);
        }}
        className={
          "w-11 h-6 bg-mid rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
          + (enabled ? 'bg-brand after:translate-x-full after:border-brand after:bg-brand' : '')}

      ></div>
      <span className="ml-2 text-sm font-medium text-dark-900">
        {enabled ? 'ON' : 'OFF'}
      </span>
    </div>
  );
}