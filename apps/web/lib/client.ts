// client.ts
import { treaty } from '@elysiajs/eden'
import type { App } from '@guoj/server'
import config from '../../../config.json'

const client = treaty<App>(`${config.FRONTEND_HOST}:${config.FRONTEND_PORT}/backend-api`) 

export default client;
