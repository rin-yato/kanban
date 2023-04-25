export default defineEventHandler(async (event) => {
  const allTasks = await prisma.task.findMany();
  return allTasks;
});
