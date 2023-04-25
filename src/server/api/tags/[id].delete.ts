export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const deletedTag = await prisma.tag.delete({ where: { id } });
  return deletedTag;
});
