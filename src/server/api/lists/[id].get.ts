export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const id = Number(event.context.params!.id);
  const oneList = await prisma.list.findFirst({
    where: {
      id: id,
    },
  });

  return oneList;
});
