
import MenuItem from "../MenuItem/MenuItem";
import "./MenuList.css";

export default function MenuList({ items }) {
  return (
    <div className="menu-list-container">
      {items.map(item => (
        <MenuItem
          key={item.id}
          name={item.name}
          thumb={item.thumb}
          price={item.price}
          category={item.category}
        />
      ))}
    </div>
  )
}
