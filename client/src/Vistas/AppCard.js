import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/AppCard.css';
import App2 from './Header';
import 'bootstrap/dist/css/bootstrap.css';
function AppCard() {
  const [data, setData] = useState([]);
  const [editingItemId, setEditingItemId] = useState(null);
  const [editedItemValue, setEditedItemValue] = useState('');
  const [editedItemValue1, setEditedItemValue1] = useState('');
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/turnos'); // Reemplaza 'your-endpoint' con la URL o ruta de tu servidor
      setData(response.data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  };

  const handleEditItem = (itemId, value,value1) => {
    setEditingItemId(itemId);
    
    setEditedItemValue(value);
    setEditedItemValue1(value1);
  };

  const handleUpdateItem = async (itemId) => {
    try {
      console.log(itemId)
      await axios.put(`http://localhost:3002/turnos/${itemId}`, { value: editedItemValue },{value1:editedItemValue1}); // Reemplaza 'your-endpoint' con la URL o ruta de tu servidor
      console.log('entre 2')
      
      fetchData();
      setEditingItemId(null);
      setEditedItemValue('');
      setEditedItemValue1('');
    } catch (error) {
      console.error('Error al actualizar el elemento:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3002/turnos/${itemId}`); // Reemplaza 'your-endpoint' con la URL o ruta de tu servidor
      fetchData();
    } catch (error) {
      console.error('Error al eliminar el elemento:', error);
    }
  };
console.log(data)
  return (
    
    
      <div>
        <div class="card-header">
        <App2 />
    </div>
    <div className='conteniter'>
      <table className="app-card-table">
        <thead>
          <tr>
            
            <th>Zona</th>
            <th>Departamento</th>
            <th>Municipio</th>
            <th>Caso</th>
            <th>Tipo tk</th>
            <th>Cliente</th>
            <th>Observacion</th>
            <th>Estado</th>
            <th>Analista</th>
            <th>Fecha de Apertura</th>
            <th>Contratista</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Zona
                )}
              </td>
              <td>
              {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue1}
                    onChange={(e) => setEditedItemValue1(e.target.value)}
                  />
                ) : (
                  item.Departamento
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Municipio
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Caso
                )}
                </td> 
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Tipo_tk
                )}
              </td>  
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Cliente
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Observacion
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Estado
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Analista
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Fecha_de_Apertura
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <input
                    type="text"
                    value={editedItemValue}
                    onChange={(e) => setEditedItemValue(e.target.value)}
                  />
                ) : (
                  item.Contratista
                )}
              </td>
              <td>
                {editingItemId === item.id ? (
                  <>
                    <button onClick={() => handleUpdateItem(item.id)}>Guardar</button>
                    <button onClick={() => setEditingItemId(null)}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEditItem(item.id, item.Zona,item.Departamento)}>Editar</button>
                    <button onClick={() => handleDeleteItem(item.id)}>Eliminar</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    
  );
}

export default AppCard;
