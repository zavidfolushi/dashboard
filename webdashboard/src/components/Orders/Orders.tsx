import React, { FC, useEffect, useRef } from 'react';
import { IOrders } from '../../models/models';
import styles from './Orders.module.scss'
import OrderItem from './OrderItem';

export interface OrdersProps{
  orders: IOrders[];
  error: boolean;
  loading: boolean;
  onScrollEnd: () => void;
}

const Orders: FC<OrdersProps> = ({ orders, error, loading, onScrollEnd }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 10) {
        onScrollEnd();
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className='w-full'>
      <h1 className="text-4xl font-bold mb-12 uppercase">Orders</h1>
      <div className={styles.order} ref={containerRef}>
        {orders.map(order => <OrderItem key={order.number} order={order}/>)}
      </div>
    </div>
  );
};

export default Orders;