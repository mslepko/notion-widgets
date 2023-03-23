import React from "react";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useCallback, useState } from "react"

function Toggle({name, onToggle, offToggle, desc, status}) {
  const onValue = onToggle ? onToggle : 'Show'
  const offValue = offToggle ? offToggle : 'Hide'
  const [enabled, setEnabled] = useState(status)
  console.log('status', name, status, enabled)
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, !value);
      setEnabled(!value)
      router.push(pathname + '?' + params.toString());

    },
    [searchParams],
  );

  return (
    <div className="grid-cols-3 gap-4 grid relative items-center w-full text-xl">
      <p className="whitespace-nowrap">{desc}</p>
      <div className="flex justify-center align-middle">
        <div
          onClick={() => createQueryString(name, enabled)}
          className={
            "relative w-11 h-6 bg-mid rounded-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
            + (enabled ? 'bg-brand after:translate-x-full after:border-brand after:bg-brand' : '')}
        ></div>
      </div>
      <p className="ml-4 font-medium">
        {enabled ? onValue : offValue}
      </p>
    </div>
  );
}

export default Toggle