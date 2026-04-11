import { Router } from 'express';
import { PlanRepository } from '../repositories/plan.repository';
import { PlanService } from '../services/plan.service';
import { PlanController } from '../controllers/plan.controller';
import { asyncHandler } from '../middlewares/async-handler.middleware';

const planRepository = new PlanRepository();
const planService = new PlanService(planRepository);
const planController = new PlanController(planService);

export const planRoutes = Router();

planRoutes.get('/', asyncHandler(planController.list));
