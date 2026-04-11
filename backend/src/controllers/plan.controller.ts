import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { PlanService } from '../services/plan.service';

export class PlanController {
  constructor(private readonly planService: PlanService) {}

  list = async (_req: Request, res: Response) => {
    const plans = await this.planService.list();
    return res.status(StatusCodes.OK).json(plans);
  };
}
