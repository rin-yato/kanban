export default defineEventHandler(async (event) => {
  const allLists = await prisma.list.findMany();

  return allLists;
});
