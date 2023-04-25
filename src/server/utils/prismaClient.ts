import { PrismaClient } from "@prisma/client";

export default function () {
  return new PrismaClient();
}
