import { Order } from "@/app/types";
import TableContainer from ".";

type Props = {
  orders: Order[];
};

const OrdersTable = ({ orders }: Props) => {
  const getColor = (status: string) => {
    switch (status) {
      case "Shipped":
        return "bg-blue-600";

      case "Delivered":
        return "bg-green-600";

      case "Processing":
        return "bg-yellow-600";

      default:
        return "bg-gray-600";
    }
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>id</th>
          <th>Toplam Fiyat</th>
          <th>Ürün Sayısı</th>
          <th>Sipariş Tarihi</th>
          <th>Nereye</th>
          <th>Durum</th>
        </tr>
      </thead>

      <tbody>
        {orders.map((order, key) => (
          <tr key={key}>
            <td>{order.id}</td>

            <td className="text-green-600">${order.total_price}</td>

            <td>{order.items.reduce((acc, item) => acc + item.quantity, 0)}</td>

            <td>
              {new Date(order.order_date).toLocaleDateString("tr", {
                day: "2-digit",
                month: "long",
                year: "2-digit",
              })}
            </td>

            <td>{order.shipping_address.city}</td>

            <td>
              <span
                className={`py-1 px-2 text-white rounded-lg shadow ${getColor(
                  order.status
                )}`}
              >
                {order.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default OrdersTable;
