import { Link } from "react-router-dom";
import "./menu.scss";
import { menu } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      {menu.map(({ id, title, listItems }) => (
        <div className="items" key={id}>
          <span className="title">{title}</span>
          {listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <div className="listItemTitle">{listItem.title}</div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
