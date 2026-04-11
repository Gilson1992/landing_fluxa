import { app } from './app';
import { env } from './config/env';
import { logger } from './config/logger';
import { prisma } from './config/prisma';

async function bootstrap() {
  await prisma.$connect();

  app.listen(env.PORT, () => {
    logger.info(`Backend listening on port ${env.PORT}`);
  });
}

bootstrap().catch((error) => {
  logger.error({ error }, 'Failed to bootstrap backend');
  process.exit(1);
});
