import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const id = Number(event.context.params!.id);
  const body = await readBody<Prisma.ListUpdateInput>(event);
  const updatedList = await prisma.list.update({
    where: {
      id: id,
    },
    data: body,
  });

  return updatedList;
});
