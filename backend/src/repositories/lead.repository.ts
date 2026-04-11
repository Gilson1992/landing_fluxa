import { prisma } from '../config/prisma';
import { CreateLeadInput } from '../schemas/lead.schema';

export class LeadRepository {
  async create(data: CreateLeadInput) {
    return prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        companyName: data.company_name,
        professionalsCount: data.professionals_count,
        planInterest: data.plan_interest,
        message: data.message
      }
    });
  }

  async findMany() {
    return prisma.lead.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findById(id: string) {
    return prisma.lead.findUnique({ where: { id } });
  }
}
