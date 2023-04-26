export default defineEventHandler(async (event) => {
  const allTasks = await prisma.task.findMany({
    include: {
      Tag: {
        select: { name: true },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
});
