import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';

// Filter out problematic environment variables
const filteredEnv = Object.fromEntries(
  Object.entries(process.env).filter(
    ([key]) => !key.includes('ProgramFiles(x86)') && !key.includes('CommonProgramFiles(x86)')
  )
);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    EnvironmentPlugin(filteredEnv), // Only filtered environment variables
  ],
  optimizeDeps: {
    include: ['storybook-addon-actions'],
  },
  define: {
    // Safe versions of problematic environment variables
    'process.env.ProgramFiles_x86': JSON.stringify(process.env['ProgramFiles(x86)']),
    'process.env.CommonProgramFiles_x86': JSON.stringify(process.env['CommonProgramFiles(x86)']),
  }
});
