import { PrismaClient } from "@prisma/client";

export default defineNuxtPlugin((nuxtApp) => {
  const prisma = new PrismaClient();
  return {
    provide: {
      prisma,
    },
  };
});
