import { Module } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Module({
  imports: [],
  providers: [
    {
      provide: 'AWS',
      useFactory: () => {
        AWS.config.update({
          region: process.env.AWS_REGION,
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
        return AWS;
      },
      inject: [],
    },
  ],
})
export class AWSModule {}
