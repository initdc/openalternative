import { Prisma } from "@prisma/client"

export const licenseOnePayload = Prisma.validator<Prisma.LicenseInclude>()({
  _count: { select: { tools: { where: { publishedAt: { lte: new Date() } } } } },
})

export const licenseManyPayload = Prisma.validator<Prisma.LicenseInclude>()({
  _count: { select: { tools: { where: { publishedAt: { lte: new Date() } } } } },
})

export type LicenseOne = Prisma.LicenseGetPayload<{ include: typeof licenseOnePayload }>
export type LicenseMany = Prisma.LicenseGetPayload<{ include: typeof licenseManyPayload }>
