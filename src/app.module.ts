import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqsModule } from '@ssut/nestjs-sqs';
import { AWSModule } from './aws.module';

@Module({
  imports: [
    AWSModule,
    SqsModule.registerAsync({
      imports: [],
      inject: [],
      useFactory: async () => ({
        consumers: [],
        producers: [
          {
            name: process.env.AWS_SQS_NAME,
            queueUrl: process.env.AWS_SQS_URI,
            region: process.env.AWS_REGION,
          },
        ],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
