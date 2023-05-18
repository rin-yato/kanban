export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const deleteList = await prisma.list.delete({
    where: {
      id: id,
    },
  });

  return deleteList;
});
