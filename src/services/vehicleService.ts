import { API_URL } from '../constants/constants';
import { VehicleRQ } from '../models/request/VehicleRQ';

const VEHICLE_URL = `${API_URL}/vehicle`

export async function fetchData(): Promise<any> {
  try {
    const response = await fetch(`${VEHICLE_URL}/list_vehicles`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export async function fetchDataByFilterDate(dateFilter:any): Promise<any> {
  try {
    const response = await fetch(`${VEHICLE_URL}/filter_vehicles_by_date/${dateFilter}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Error: ${response.status} - ${response.statusText}. ${errorData}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
  
export async function postData(objectToSave: VehicleRQ): Promise<any> {
    
  try {
    const response = await fetch(`${VEHICLE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objectToSave),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
}
