module.exports = {
  extends: ['next/babel', 'next/core-web-vitals'],
  plugins: ['@stylexjs'],
  rules: {
    '@stylexjs/valid-styles': ['error'],
  },
}
