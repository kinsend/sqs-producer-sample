import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { SqsService } from '@ssut/nestjs-sqs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly sqsService: SqsService,
  ) {}

  @Post()
  async postMessage(@Body() body: any) {
    if (!body.email)
      throw new HttpException('Email is required', HttpStatus.BAD_REQUEST);
    const payload = {
      id: '9e7b779f-5c9c-4004-859c-3e2432d6700b',
      body: {
        message: `{"message":{"subscribers":[{"_id":"647de254df28b28d22001a63","owner":"6408c8fe1a3ac8c7aa3b833e","form":"645e419561e851836644714c","tags":["640f54cfc59178f45c514ed6"],"email":"${body.email}","firstName":"Adam","lastName":"Smith","location":"australia","phoneNumber":{"phone":"9898988989","code":1,"short":"US"},"metaData":"{\\"What month is this ? \\":\\"RED\\",\\"birthday\\":\\"6/5/2018\\"}","isContactHidden":false,"isContactArchived":false,"isSubscribed":true,"isFacebookContact":false,"isConversationArchived":false,"isConversationHidden":false,"isVip":false,"createdAt":"2023-06-05T13:25:40.911Z","updatedAt":"2023-06-05T13:25:40.911Z","__v":0,"lastContacted":"2023-06-12T09:00:53.761Z","id":"647de254df28b28d22001a63"}],"ownerPhoneNumber":"+18776792224","update":{"createdBy":{"_id":"6408c8fe1a3ac8c7aa3b833e","email":"marzooq.zenkoders@gmail.com","firstName":"Marzooq ","lastName":"Ahmed ","phoneNumber":[{"code":1,"short":"US"}],"phoneSystem":[{"phone":"8776792224","code":1,"short":"US"}],"provider":"password","password":"$2b$10$36tDn4tc.3BusHvuzZELbu6X8HZVrn7I0cZ7oQCofEG5lhRfcehTO","status":"ACTIVE","createdAt":"2023-03-08T17:42:22.896Z","updatedAt":"2023-05-09T13:01:48.723Z","__v":1,"isEnabledPayment":true,"isEnabledBuyPlan":true,"priceSubscribe":"price_1M78uOL9qtTnHtkvZmwpsXtz","stripeCustomerUserId":"cus_N200DVatWtJX7B","image":"https://kinsend-public.s3.amazonaws.com/16838975974751.jfif","id":"6408c8fe1a3ac8c7aa3b833e"},"recipients":["647de254df28b28d22001a63"],"message":"sqs","messageReview":"sqs","filter":{"tagId":"640f54cfc59178f45c514ed6"},"datetime":"2023-06-12T09:13:44.869Z","triggerType":"Once","progress":"Scheduled","createdAt":"2023-06-12T09:12:52.071Z","updatedAt":"2023-06-12T09:12:52.071Z","_id":"6486e194c31e3534bc199990","__v":1,"id":"6486e194c31e3534bc199990"},"scheduleName":"6486e194c31e3534bc199990-1686561172071"}}`,
        type: 'update',
        createdAt: '2023-06-12T09:13:45.314Z',
      },
    };
    await this.sqsService.send('kinsend-dev', payload);
  }
}
