export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const allTags = await prisma.tag.findMany();
  return allTags;
});
