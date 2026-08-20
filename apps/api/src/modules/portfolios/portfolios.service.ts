import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PortfoliosService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.portfolio.findMany({
      include: {
        profile: true,
        theme: true,
        _count: {
          select: {
            projects: true,
            skills: true,
            experiences: true,
            educations: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.portfolio.findUnique({
      where: { id },
      include: {
        profile: true,
        theme: true,
        projects: {
          include: { project: true },
          orderBy: { displayOrder: 'asc' },
        },
        skills: {
          include: { skill: true },
          orderBy: { displayOrder: 'asc' },
        },
        experiences: {
          orderBy: { displayOrder: 'asc' },
        },
        educations: {
          orderBy: { displayOrder: 'asc' },
        },
        cvs: true,
      },
    });
  }

  create(data: any) {
    return this.prisma.portfolio.create({
      data,
    });
  }

  update(id: string, data: any) {
    return this.prisma.portfolio.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.portfolio.delete({
      where: { id },
    });
  }
}
