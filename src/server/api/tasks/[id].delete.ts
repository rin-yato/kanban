export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const id = Number(event.context.params!.id);
  const deletedTask = await prisma.task.delete({ where: { id } });
  return deletedTask;
});
