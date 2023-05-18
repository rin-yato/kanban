import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const body = await readBody<Prisma.TaskCreateInput>(event);

  const createdTask = await prisma.task.create({ data: body });
  return createdTask;
});
