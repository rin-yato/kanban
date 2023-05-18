export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const deletedTask = await prisma.task.delete({ where: { id } });
  return deletedTask;
});
