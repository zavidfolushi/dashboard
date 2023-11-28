import React, { FC } from 'react';
import { IOrders } from '../../models/models';

export interface OrdersProps{
  orders: IOrders[];
  error: boolean;
  loading: boolean;
}

const Orders: FC<OrdersProps> = ({ orders, error, loading }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-12 uppercase">Orders</h1>

    </div>
  );
};

export default Orders;