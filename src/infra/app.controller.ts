import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    return this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: category,
        category: content,
        recipientId: recipientId,
      },
    });
  }
}
