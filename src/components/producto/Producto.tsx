interface ProductoProps {
  name: string;
  price: number;
  stock: number;
}

const Producto = ({ name, price, stock }: ProductoProps) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{stock}</td>
    </tr>
  );
};

export default Producto;
