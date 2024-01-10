'use client'

import stylex from '@stylexjs/stylex'

const styles = stylex.create({
  base: {
    fontSize: 16,
    backgroundColor: 'hotpink',
    color: 'white',
  },
  highlight: {
    backgroundColor: 'rebeccapurple',
  },
})

export interface TestProps extends React.PropsWithChildren {
  isHighlight?: boolean
}
export function Test({children, isHighlight = false}: TestProps) {
  return (
    <div className={stylex(styles.base, isHighlight && styles.highlight)}>
      {children}
    </div>
  )
}
