import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  const plans = [
    {
      name: 'Basic',
      minProfessionals: 1,
      maxProfessionals: 5,
      priceMonthly: 99,
      priceYearly: 990
    },
    {
      name: 'Pro',
      minProfessionals: 6,
      maxProfessionals: 20,
      priceMonthly: 249,
      priceYearly: 2490
    },
    {
      name: 'Enterprise',
      minProfessionals: 21,
      maxProfessionals: null,
      priceMonthly: 599,
      priceYearly: 5990
    }
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      create: plan,
      update: {
        minProfessionals: plan.minProfessionals,
        maxProfessionals: plan.maxProfessionals,
        priceMonthly: plan.priceMonthly,
        priceYearly: plan.priceYearly
      }
    });
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
