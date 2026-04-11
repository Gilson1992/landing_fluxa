import { prisma } from '../config/prisma';

export class PlanRepository {
  async findMany() {
    return prisma.plan.findMany({ orderBy: { minProfessionals: 'asc' } });
  }
}
