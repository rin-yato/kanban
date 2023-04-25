export default defineEventHandler( async (event) => {
  const prisma =  prismaClient()
  const allLists = await prisma.list.findMany()

  return allLists;
  
})
