export default defineEventHandler(async (event) => {
  const listId = event.path?.split("=")[1];

  const allTasks = await prisma.task.findMany({
    where: {
      listId: Number(listId),
    },
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
