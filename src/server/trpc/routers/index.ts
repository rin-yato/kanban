import { z } from "zod";
import { publicProcedure, router } from "@/server/trpc/root";
import prismaClient from "~/server/utils/prismaClient";
import ytdl from "ytdl-core";

export const appRouter = router({
  getTodos: publicProcedure
    .input(
      z
        .object({
          limit: z.number().optional(),
        })
        .optional()
    )
    .query(async (opts) => {
      const prisma = prismaClient();
      const todos = await prisma.todo.findMany();
      return todos;
    }),
  download: publicProcedure
    .input(
      z.object({
        url: z.string(),
      })
    )
    .query(async ({ input: { url } }) => {
      const id = ytdl.getURLVideoID(url);
      const meta = await ytdl.getInfo(url);

      return {
        url: `https://www.youtube.com/embed/${id}`,
        formats: meta.formats,
      };
    }),
});

export type AppRouter = typeof appRouter;
