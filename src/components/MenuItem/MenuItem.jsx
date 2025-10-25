
import './MenuItem.css';

export default function MenuItem ({ name, thumb, category, price }) {
  return (
    <div className="menu-item-card">
      <img src={thumb} alt={name} />
      <div>
        <h5>{name}</h5>
        <p>{category}</p>
        <p>{price} €</p>
      </div>
    </div>
  );
}


