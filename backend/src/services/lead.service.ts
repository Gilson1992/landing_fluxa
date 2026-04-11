import { LeadRepository } from '../repositories/lead.repository';
import { CreateLeadInput } from '../schemas/lead.schema';

export class LeadService {
  constructor(private readonly leadRepository: LeadRepository) {}

  async create(input: CreateLeadInput) {
    return this.leadRepository.create(input);
  }

  async list() {
    return this.leadRepository.findMany();
  }

  async getById(id: string) {
    return this.leadRepository.findById(id);
  }
}
