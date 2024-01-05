import { useState } from 'react';
import { VehicleRS } from '../models/response/VehicleRS';
import { fetchDataByFilterDate } from '../services/vehicleService';

const FilterVehicles = () =>{
    const [inputDate, setInputDate] = useState<any>(null);
    const [data, setData] = useState<any>(null);

      const handleClickButton = async () => {
        window.location.href = '/';
      };
      
      const handleFilterData = async () => {
        const fetchDataAsync = async () => {
          try {
            const result = await fetchDataByFilterDate(inputDate);
            setData(result);
          } catch (error) {
            setData([]);
            console.log(error);
          }
        };
        fetchDataAsync();
      };

      const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputDate(event.target.value);
      };

    
      return (
        <div className="container">
            <button type="button" className="btn btn-dark btn-sm" onClick={handleClickButton}>Regresar</button>
            
            <div className="form-group">
              <label htmlFor="purchaseDate">Fecha de Compra:</label>
              <input
                type="date"
                id="purchaseDate"
                name="purchaseDate"
                className="form-control"
                value={inputDate instanceof Date ? inputDate.toISOString().split('T')[0] : (inputDate || '')}
                onChange={handleDateChange}
                required
              />
            </div>
            <button className="btn btn-secondary btn-sm" onClick={handleFilterData}>Filtrar Vehículos por Fecha</button>
            
            <div className="table-responsive" style={{marginTop:10}}>
                <h2 style={{textAlign:"center"}}>Vehículos Que deben realizar Mantenimiento</h2>
                <table className="table table-hover text-center table-sm">
                <thead className="table-dark">
                    <tr>
                        <th>PLACA</th>
                        <th>AÑO</th>
                        <th>FECHA DE COMPRA</th>
                        <th>OBSERVACIONES</th>
                        <th>MARCA</th>
                        <th>MODELO</th>
                        <th>PRECIO</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item: VehicleRS) => (
                        <tr key={item.plate}>
                            <td>{item.plate}</td>
                            <td>{item.year}</td>
                            <td>{item.purchaseDate ? new Date(item.purchaseDate).toLocaleDateString() : 'S/A'}</td>
                            <td>{item.observations}</td>
                            <td>{item.modelVehicleRS?.brandVehicleRS?.name}</td>
                            <td>{item.modelVehicleRS?.name}</td>
                            <td>{item.price}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>
      );
    };    

export default FilterVehicles