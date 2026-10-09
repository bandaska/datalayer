import path from 'node:path';
import { defineConfig } from 'vitest/config';

// Testy běží bez React Router pluginu (jen moduly z app/ přes alias ~/).
export default defineConfig({
  resolve: {
    alias: { '~': path.resolve(import.meta.dirname, 'app') },
  },
  test: {
    include: ['tests/**/*.test.ts'],
    environment: 'node',
  },
});
