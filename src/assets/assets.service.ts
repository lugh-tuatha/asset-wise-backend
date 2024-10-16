import { Injectable, NotFoundException } from '@nestjs/common';
import { Hardware } from './schema/hardware.schema';
import * as mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AssetsService {
    constructor(
        @InjectModel(Hardware.name)
        private hardwareModel: mongoose.Model<Hardware>
    ) {}

    async findAllHardwareAssets(): Promise<Hardware[]> {
        const allHardware = await this.hardwareModel.find()
        return allHardware;
    }

    async createHardwareAssets(hardware: Hardware): Promise<Hardware>{
        const res = await this.hardwareModel.create(hardware)
        return res
    }

    async findHardwareAssetsById(id: string): Promise<Hardware> {
        const hardware = await this.hardwareModel.findById(id)

        if(!hardware) {
            throw new NotFoundException('Hardware not found')
        }

        return hardware;
    }

    async findHardwareAssetsByStatus(status: string): Promise<Hardware[]> {
        const hardwareAssets = await this.hardwareModel.find({ status });
        console.log(`Querying for status: '${status}'`);

        if(!hardwareAssets.length){
            throw new NotFoundException('No hardware assets found for the specified status');
        }

        return hardwareAssets
    }

    async updateHardwareAssetsById(id: string, hardware: Hardware): Promise<Hardware> {
        return await this.hardwareModel.findByIdAndUpdate(id, hardware, {
            new: true,
            runValidators: true
        })
    }

    async deleteHardwareAssetsById(id: String): Promise<Hardware> {
        return await this.hardwareModel.findByIdAndDelete(id)
    }

}
