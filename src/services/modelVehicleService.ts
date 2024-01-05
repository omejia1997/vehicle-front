import { API_URL } from '../constants/constants';
import { ModelVehicleRS } from '../models/response/ModelVehicleRS';

const VEHICLE_URL = `${API_URL}/model_vehicle`

export async function fetchDataModelByBrand(nameBrand:string): Promise<ModelVehicleRS[]> {
  try {
    const response = await fetch(`${VEHICLE_URL}/list_models/${nameBrand}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
  