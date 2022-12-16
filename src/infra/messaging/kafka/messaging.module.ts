import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka-consumer.service';
import { NotificationsController } from './controllers/notifications.controller';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [NotificationsController],
})
export class MessagingModule {}
