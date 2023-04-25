export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const allTasks = await prisma.task.findMany();
  return allTasks;
});
