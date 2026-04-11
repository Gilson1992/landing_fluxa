import { PlanRepository } from '../repositories/plan.repository';

export class PlanService {
  constructor(private readonly planRepository: PlanRepository) {}

  async list() {
    return this.planRepository.findMany();
  }
}
