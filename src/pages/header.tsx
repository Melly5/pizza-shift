import "../../assets/scss/header.scss";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  return (
    <div className="main">
      <p className="name">SANTORINIZ</p>
      <div className="image">pepper</div>
      <div className="variants">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p>Главная</p>
        </Link>
        <Link to="/pizzas" style={{ textDecoration: "none" }}>
          <p>Выбрать пиццу</p>
        </Link>
        <Link to="/pizzas" style={{ textDecoration: "none" }}>
          <p>Оформить заказ</p>
        </Link>
      </div>
    </div>
  );
};
