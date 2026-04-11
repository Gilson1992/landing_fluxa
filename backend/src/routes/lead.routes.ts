import { Router } from 'express';
import { LeadRepository } from '../repositories/lead.repository';
import { LeadService } from '../services/lead.service';
import { LeadController } from '../controllers/lead.controller';
import { asyncHandler } from '../middlewares/async-handler.middleware';

const leadRepository = new LeadRepository();
const leadService = new LeadService(leadRepository);
const leadController = new LeadController(leadService);

export const leadRoutes = Router();

leadRoutes.post('/', asyncHandler(leadController.create));
leadRoutes.get('/', asyncHandler(leadController.list));
leadRoutes.get('/:id', asyncHandler(leadController.getById));
