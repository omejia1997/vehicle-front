import { ModelVehicleRQ } from "./ModelVehicleRQ";

export type VehicleRQ = {
    plate?: string;
    year?: number;
    purchaseDate?: Date;
    observations?: string;
    modelVehicleRQ?: ModelVehicleRQ;
};
