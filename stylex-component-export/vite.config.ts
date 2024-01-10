import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import preserveDirectives from 'rollup-plugin-preserve-directives'
import dts from 'vite-plugin-dts'
import pkg from './package.json'

function externals(list) {
  if (list.length === 0) {
    return () => false
  }

  const re = new RegExp(`^(${list.join('|')})($|/)`)
  return (id) => re.test(id)
}

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    sourcemap: true,
    lib: {
      entry: ['./src/index.ts'],
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: externals([
        ...Object.keys(pkg.dependencies ?? {}),
        ...Object.keys(pkg.peerDependencies ?? {}),
      ]),
      // @ts-expect-error plugin types are not right
      plugins: [preserveDirectives()],
      output: {
        preserveModules: true,
      },
    },
  },
  // optimizeDeps: {
  //   exclude: ['@urban-ui/theme']
  // },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: ['**/*.test.ts*'],
    }),
  ],
})
