import stylex from '@stylexjs/stylex'
import {Test} from 'stylex-component-export'
import {ClientToggle} from './client'

const styles = stylex.create({
  main: {
    padding: 8,
  },
  container: {
    backgroundColor: 'rebeccapurple',
    padding: 8,
    color: 'white',
    fontSize: 16,
    fontWeight: 700,
  },
})

export default function Home() {
  return (
    <main className={stylex(styles.main)}>
      <div className={stylex(styles.container)}>Hello world from stylex</div>
      <Test>Hello world from external dependency</Test>
      <ClientToggle />
    </main>
  )
}
