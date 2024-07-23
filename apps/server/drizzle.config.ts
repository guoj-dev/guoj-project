import { defineConfig } from 'drizzle-kit';

import { config } from '@/plugins/config';

export default defineConfig({
    dialect: 'postgresql',
    schema: './src/db/schema/index.ts',
    out: './src/db/drizzle',
    dbCredentials: {
        url: config.DATABASE_URL ?? '',
    }
})
