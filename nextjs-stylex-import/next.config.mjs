import path from 'node:path'
import {fileURLToPath} from 'node:url'

// const stylexPlugin = require('@stylexjs/nextjs-plugin');
import stylexPlugin from '@stylexjs/nextjs-plugin'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['stylex-component-export'],
  webpack(config) {
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts'],
      '.jsx': ['.jsx', '.tsx'],
    }
    return config
  },
}

export default stylexPlugin({
  rootDir: __dirname,
})(nextConfig)
