import { useEffect, useState } from "react";
import MenuList from "./components/MenuList/MenuList";

const API = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(API);

        if (!res.ok) {
          throw new Error('Error al cargar los datos.');
        }

        const data = await res.json();
        const category = 'Seafood';
        const processMeals = data.meals.map(meal => ({
          id: meal.idMeal,
          name: meal.strMeal,
          thumb: meal.strMealThumb,
          price: Math.floor(Math.random() * 10) + 10,
          category,
        }));

        setItems(processMeals);

        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItems = items.filter(item => {
    if (inputValue === '') {
      return true;
    }

    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  let processedItems = [...filteredItems];

  if (sortOrder !== 'default') {
    processedItems.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (sortOrder === 'asc') {
        return priceA - priceB;
      } else if (sortOrder === 'desc') {
        return priceB - priceA;
      }
    });
  }

  return (
    <>
      <h1>Menú del Restaurante</h1>
      {isLoading && (
        <p>Cargando</p>
      )}

      {error && (
        <p>{error}</p>
      )}

      {!isLoading && !error && (
        <div className="menu-content-wrapper">
          <input
            type="text"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value)
            }}
          />

          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Ordenar por defecto</option>
            <option value="asc">Precio: Menor a Mayor</option>
            <option value="desc">Precio: Mayor a Menor</option>
          </select>

          <MenuList items={processedItems} />
        </div>
      )}
    </>
  )
}

