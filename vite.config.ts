import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'
import tsconfigPaths from 'vite-tsconfig-paths'

// import { importmap } from './importmap'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const plugins = [
    tsconfigPaths(),
    react(),
    federation({
      name: 'commons_module',
      filename: 'commons_module.js',
      exposes: {
        './Componets': './src/ComponetsExposes'
      },
      shared: ['react', 'react-dom']
    })
  ]

  if (command === 'serve') {
    return {
      // dev specific config
      mode: 'development',
      server: {
        port: 5001
      },
      preview: {
        port: 5001
      },
      plugins: [...plugins]
    }
  } else {
    // command === 'build'
    return {
      // build specific config
      mode: 'production',
      build: {
        target: 'esnext'
      },
      plugins: [...plugins]
    }
  }
})
