import { Prisma } from "@prisma/client";

export default defineEventHandler(async (event) => {
  const id = Number(event.context.params!.id);
  const body = await readBody<Prisma.TaskUpdateInput>(event);
  const updatedTask = await prisma.task.update({ where: { id }, data: body });
  return updatedTask;
});
