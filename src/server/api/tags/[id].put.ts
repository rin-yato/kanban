import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const body = await readBody<Prisma.TagUpdateInput>(event);

  const updatedTag = await prisma.tag.update({
    where: { id },
    data: body,
  });

  return updatedTag;
});
