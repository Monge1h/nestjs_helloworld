import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateMensajeDto } from './dto/create-mensaje-dto';

@Controller('mensajes')
export class MensajesController {
    @Post()
    create (@Body() createMensajeDto: CreateMensajeDto){
        return 'Message created'
    }

    @Get()
    getAll(){
        return "List of messages"
    }

    @Put(':id')
    update(@Body() updateMensajeDto: CreateMensajeDto) {
        return 'Message updated'
    }

    @Delete(':id')
    delete(){
        return 'Message deleted'
    }
}
