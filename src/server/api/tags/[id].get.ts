export default defineEventHandler(async (event) => {
  const prisma = prismaClient();
  const id = Number(event.context.params!.id);
  const oneTag = await prisma.tag.findUnique({ where: { id } });
  return oneTag;
});
