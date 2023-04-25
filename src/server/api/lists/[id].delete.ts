export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
    const id = Number(event.context.params!.id);
    const deleteList = await prisma.list.delete({
        where: {
            id: id,
        },
    });

  return deleteList;
});
