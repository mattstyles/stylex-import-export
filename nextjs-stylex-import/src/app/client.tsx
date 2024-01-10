'use client'

import {useState, useCallback} from 'react'
import {Test} from 'stylex-component-export'

export function ClientToggle() {
  const [isToggled, setIsToggled] = useState(false)
  const onToggle = useCallback(() => {
    setIsToggled(!isToggled)
  }, [isToggled, setIsToggled])

  return (
    <div>
      <button onClick={onToggle}>Toggle highlight</button>
      <Test isHighlight={isToggled}>Hello world from external library</Test>
    </div>
  )
}
