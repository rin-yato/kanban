export default defineEventHandler(async (event) => {
  const allTags = await prisma.tag.findMany();
  return allTags;
});
