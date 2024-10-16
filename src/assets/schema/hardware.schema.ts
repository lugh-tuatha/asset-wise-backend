import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    SOLAR = 'Solar',
    CAR = 'Car',
    DESKTOPS = 'Desktops',
    LAPTOPS = 'Laptops',
    PHONES = 'Phones',
    TABLETS = 'Tablets',
}

@Schema({
    timestamps: true
})

export class Hardware {
    @Prop()
    product_name: string;

    @Prop()
    product_image: string;

    @Prop()
    serial: string;

    @Prop()
    model: string;

    @Prop()
    category: Category;

    @Prop()
    status: string;

    @Prop()
    account_person: string | null;

    @Prop()
    location: string;

    @Prop()
    notes: string;

    @Prop()
    purchase_date: Date;
    
    @Prop()
    order_number: string;

    @Prop()
    purchase_cost: number;

    @Prop()
    eol_date: Date;

    @Prop()
    supplier: string;

    @Prop()
    release_count: number;

    @Prop()
    return_count: number;

    @Prop()
    request_count: number;
}

export const HardwareSchema = SchemaFactory.createForClass(Hardware)