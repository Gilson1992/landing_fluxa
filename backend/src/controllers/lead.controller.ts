import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { LeadService } from '../services/lead.service';
import { createLeadSchema } from '../schemas/lead.schema';

export class LeadController {
  constructor(private readonly leadService: LeadService) {}

  create = async (req: Request, res: Response) => {
    const payload = createLeadSchema.parse(req.body);
    const lead = await this.leadService.create(payload);

    return res.status(StatusCodes.CREATED).json(lead);
  };

  list = async (_req: Request, res: Response) => {
    const leads = await this.leadService.list();
    return res.status(StatusCodes.OK).json(leads);
  };

  getById = async (req: Request, res: Response) => {
    const lead = await this.leadService.getById(req.params.id);

    if (!lead) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'Lead not found' });
    }

    return res.status(StatusCodes.OK).json(lead);
  };
}
