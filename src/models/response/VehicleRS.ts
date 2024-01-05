import { ModelVehicleRS } from "./ModelVehicleRS";

export type VehicleRS = {
    plate?: string;
    year?: number;
    purchaseDate?: Date;
    observations?: string;
    modelVehicleRS?: ModelVehicleRS;
    price?: number;
};
