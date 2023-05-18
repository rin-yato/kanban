export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const oneTask = await prisma.task.findUnique({
    where: { id },
    include: {
      Tag: {
        select: { name: true },
      },
    },
  });
  return oneTask;
});
