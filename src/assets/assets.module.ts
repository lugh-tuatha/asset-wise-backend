import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { AssetsService } from './assets.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HardwareSchema } from './schema/hardware.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Hardware', schema: HardwareSchema }])],
    controllers: [AssetsController],
    providers: [AssetsService]
})
export class AssetsModule {}
