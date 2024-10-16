import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { Hardware } from './schema/hardware.schema';
import { CreateHardwareDto } from './dto/create-hardware.dto';
import { UpdateHardwareDto } from './dto/update-hardware.dto';

@Controller('v1/assets') 
export class AssetsController {                   
    constructor(private assetsService: AssetsService){}

    @Get('hardware')
    async getAllHardwareAssets(): Promise<Hardware[]>{
        return this.assetsService.findAllHardwareAssets()
    }
    
    @Get('hardware/filter')
    async getHardwareDataByStatus(
        @Query('status') 
        status: string
    ) : Promise<Hardware[]> {
        return this.assetsService.findHardwareAssetsByStatus(status)
    }

    @Get('hardware/:id')
    async getHardwareAssetsById(
        @Param('id')
        id: string
    ): Promise<Hardware> {
        return this.assetsService.findHardwareAssetsById(id)
    }

    @Post('hardware')
    async postHardwareAssets(
        @Body()
        
        hardware: CreateHardwareDto,
    ): Promise<Hardware>{
        const hardwareProductData = {
            ...hardware,
            account_person: null,
            release_count: 0,   
            return_count: 0,
            request_count: 0  
        } 
        return this.assetsService.createHardwareAssets(hardwareProductData)
    }

    @Patch('hardware/:id')
    async patchHardwareAssetsById(
        @Param('id')
        id: string,
        @Body()
        hardware: UpdateHardwareDto,
    ): Promise<Hardware> {
        return this.assetsService.updateHardwareAssetsById(id, hardware)
    }

    @Delete('hardware/:id')
    async deleteHardwareAssetsById(
        @Param('id')
        id: string
    ): Promise<Hardware> {
        return this.assetsService.deleteHardwareAssetsById(id)
    }
}
