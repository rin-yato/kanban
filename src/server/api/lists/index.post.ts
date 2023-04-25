import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const body = await readBody<Prisma.ListCreateInput>(event);
  const addList = prisma.list.create({
    data: body,
  });


  return addList;
});
