import { Router } from 'express';
import { leadRoutes } from './lead.routes';
import { planRoutes } from './plan.routes';
import { healthController } from '../controllers/health.controller';

export const apiRoutes = Router();

apiRoutes.get('/health', healthController);
apiRoutes.use('/leads', leadRoutes);
apiRoutes.use('/plans', planRoutes);
