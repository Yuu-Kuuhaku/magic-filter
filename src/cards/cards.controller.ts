import { Controller, Get, Post } from '@nestjs/common';

@Controller('cards')
export class CardsController {
   
   @Post('Forcar_sincronizacao')
   sincronizacao(){

   }

   @Get()
   findAll(){

   }
}
