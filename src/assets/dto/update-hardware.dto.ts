import { Category } from "../schema/hardware.schema";

export class UpdateHardwareDto {
    readonly product_name: string;
    readonly product_image: string;
    readonly serial: string;
    readonly model: string;
    readonly category: Category;
    readonly status: string;
    readonly account_person: string;
    readonly location: string;
    readonly notes: string;
    readonly purchase_date: Date;
    readonly order_number: string;
    readonly purchase_cost: number;
    readonly eol_date: Date;
    readonly supplier: string;
    readonly release_count: number;
    readonly return_count: number;
    readonly request_count: number;
}