export default defineEventHandler(async (event) => {
  const allLists = await prisma.list.findMany({
    include: {
      Task: {
        orderBy: {
          position: "desc",
        },
        include: {
          Tag: true,
        },
      },
    },
  });
  return allLists;
});
