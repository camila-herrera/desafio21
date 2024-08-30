import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

const PizzaPage = () => {
  const { id } = useParams(); // Obtener el ID de la pizza desde los parámetros de la URL
  const location = useLocation(); // Obtener el estado de la ubicación actual
  const [pizza, setPizza] = useState(location.state?.pizza || null); // Usa el estado pasado o inicializa como null
  const [loading, setLoading] = useState(!pizza); // Estado para manejar la carga solo si no hay pizza
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!pizza) {
      // Solo hace la solicitud a la API si no se pasó el estado de la pizza
      const fetchPizza = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
          if (!response.ok) {
            throw new Error('Error al obtener los detalles de la pizza');
          }
          const data = await response.json();
          setPizza(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchPizza();
    }
  }, [id, pizza]);

  if (loading) return <p>Cargando detalles de la pizza...</p>;
  if (error) return <p>{error}</p>;

  if (!pizza) {
    return (
      <div className='carta'>
        <h2>Pizza no encontrada</h2>
        <button onClick={() => navigate(-1)}>Volver</button>
      </div>
    );
  }

  return (
    <div className='carta'>
      <h2 style={{ textTransform: 'uppercase', fontSize: '40px' }}>{pizza.name}</h2>
      <img 
        style={{ width: '22rem', margin: '5px', alignItems: 'center', borderRadius: '5%' }} 
        src={pizza.img} 
        alt={pizza.name} 
      />
      <p>{pizza.desc}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
      <p style={{ fontSize: '30px' }}><strong>Precio: ${pizza.price}</strong></p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default PizzaPage;


