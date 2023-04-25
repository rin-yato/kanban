import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const body = await readBody<Prisma.TagCreateInput>(event);
  const newTag = await prisma.tag.create({ data: body });
  return newTag;
});
