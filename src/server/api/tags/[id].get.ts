export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const oneTag = await prisma.tag.findUnique({ where: { id } });
  return oneTag;
});
