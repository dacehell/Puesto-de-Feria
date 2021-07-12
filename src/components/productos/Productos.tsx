import productData from "./productos.json";
import Producto from "../producto/Producto";
import styles from "../productos/productos.module.css";

const Productos = () => {
  return (
    <div className={styles.containerTable}>
      <table className="table table-info">
        <thead className="table-dark">
          <tr>
            <th scope="col">Fruta</th>
            <th scope="col">Precio</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((pro, index) => (
            <Producto
              key={index}
              name={pro.name}
              price={pro.price}
              stock={pro.stock}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productos;
