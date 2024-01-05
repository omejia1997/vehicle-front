import { useEffect, useState } from 'react';
import { VehicleRS } from '../models/response/VehicleRS';
import { fetchData } from '../services/vehicleService';

const ListVehicles = () =>{
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchDataAsync = async () => {
          try {
            const result = await fetchData();
            setData(result);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchDataAsync();
      }, []);
    
      const handlePostData = async () => {
        window.location.href = '/register-vehicle';
      };

      const handleListFilterData = async () => {
        window.location.href = '/filter-vehicles';
      };

    
      return (
        <div className="container">
            <h2>Vehículos</h2>
            <button className="btn btn-secondary btn-sm" onClick={handlePostData}>Registrar un nuevo Vehículo</button>
            <button style={{marginLeft:10}} className="btn btn-secondary btn-sm" onClick={handleListFilterData}>Buscar Vehículos para manteniento</button>
            <div className="table-responsive" style={{marginTop:10}}>
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

export default ListVehicles