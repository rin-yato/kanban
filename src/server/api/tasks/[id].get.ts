export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const id = Number(event.context.params!.id);
  const oneTask = await prisma.task.findUnique({ where: { id } });
  return oneTask;
});
