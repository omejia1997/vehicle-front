import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { BrandVehicleRS } from '../models/response/BrandVehicleRS';
import { ModelVehicleRS } from '../models/response/ModelVehicleRS';
import { fetchAllDataBrand } from '../services/brandService';
import { fetchDataModelByBrand } from '../services/modelVehicleService';
import { postData } from '../services/vehicleService';
import { VehicleRQ } from '../models/request/VehicleRQ';

const RegisterVehicle = () => {
  const [dataBrands, setDataBrands] = useState<BrandVehicleRS[]>();
  const [dataModels, setDataModels] = useState<ModelVehicleRS[]>();

  const [formData, setFormData] = useState<any>({
    plate: '',
    year: 0,
    purchaseDate: undefined,
    observations: '',
    brandVehicle: '',
    modelVehicle: ''
  });

  useEffect(() => {
    const fetchDataBrandAsync = async () => {
      try {
        const result = await fetchAllDataBrand();
        setDataBrands(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataBrandAsync();
  }, []);


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChangeSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    if(name=="brandVehicle"){
      const fetchDataModelsAsync = async () => {
        try {
          const result = await fetchDataModelByBrand(value);
          setDataModels(result);
        } catch (error) {
          console.log(error);
        }
      };
      fetchDataModelsAsync();
    }

    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const objectToSave:VehicleRQ = {
      plate: formData.plate,
      year: Number(formData.year),
      purchaseDate: formData.purchaseDate,
      observations: formData.observations,
      modelVehicleRQ: {
        name: formData.modelVehicle,
        brandVehicleRQ:{
          name:formData.brandVehicle
        }
      }
    }
    
    const handlePostData = async () => {
      try {
        const postDataResult = await postData(objectToSave);
        console.log('POST result:', postDataResult);
        window.location.href = '/';
    } catch (error) {
      // Manejar errores si es necesario
    }
      // window.location.href = '/register-vehicle';
      
    };
    console.log(objectToSave);
    handlePostData();
  };
  
  const handleClickButton = async () => {
    window.location.href = '/';
  };
    return (
      <div className="container">
        <button type="button" className="btn btn-dark btn-sm" onClick={handleClickButton}>Regresar</button>
        <div className="row justify-content-center">
          <div className="col-md-4" style={{margin: 'auto'}}>
            <h2 style={{ textAlign: 'center' }}> Registrar Vehículo</h2>
            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label htmlFor="plate">Placa:</label>
                <input type="text" id="plate" name="plate" className="form-control" value={formData.plate} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="year">Año:</label>
                <input type="number" id="year" name="year" className="form-control" value={formData.year} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label htmlFor="purchaseDate">Fecha de Compra:</label>
                <input
                  type="date"
                  id="purchaseDate"
                  name="purchaseDate"
                  className="form-control"
                  value={formData.purchaseDate instanceof Date ? formData.purchaseDate.toISOString().split('T')[0] : (formData.purchaseDate || '')}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="observations">Observaciones:</label>
                <textarea id='observations' name="observations" className="form-control" value={formData.observations} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="brandVehicle">Marca:</label>
                <select
                  id="brandVehicle"
                  name="brandVehicle"
                  className="form-control"
                  value={formData.brandVehicle || ''}
                  onChange={handleChangeSelect}
                  required
                >
                  <option value="" disabled>Seleccione una marca</option>
                  {dataBrands && dataBrands.map((brand, index) => (
                    <option key={index} value={brand.name}>
                      {brand.name}
                    </option>
                  ))}
                </select>
              </div>

              {dataModels &&
                <div className="form-group">
                  <label htmlFor="modelVehicle">Modelo:</label>
                  <select
                    id="modelVehicle"
                    name="modelVehicle"
                    className="form-control"
                    value={formData.modelVehicle || ''}
                    onChange={handleChangeSelect}
                    required
                  >
                    <option value="" disabled>Seleccione un modelo</option>
                    {dataModels && dataModels.map((model, index) => (
                      <option key={index} value={model.name}>
                        {model.name}
                      </option>
                    ))}
                  </select>
                </div>
              }
                
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-sm form-control">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      </div>

    );
  };
  
  export default RegisterVehicle