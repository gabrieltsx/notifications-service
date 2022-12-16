import { OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['national-oriole-7390-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'bmF0aW9uYWwtb3Jpb2xlLTczOTAkbtj8Bi95OqL_ww2zIXAI0MsJkzWvkKoNNDs',
          password: '********',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
