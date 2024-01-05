import { API_URL } from '../constants/constants';
import { BrandVehicleRS } from '../models/response/BrandVehicleRS';

const VEHICLE_URL = `${API_URL}/brand_vehicle`

export async function fetchAllDataBrand(): Promise<BrandVehicleRS[]> {
  try {
    const response = await fetch(`${VEHICLE_URL}/list_brands`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}