import React, { FC } from 'react';
import { IOrders } from '../../models/models';
import styles from './Orders.module.scss'
import { format, fromUnixTime } from 'date-fns';

interface OrderItemProps{
  order: IOrders;
}

const OrderItem: FC<OrderItemProps> = ({ order }) => {
  const formattedCreatedAt = format(fromUnixTime(order.createdAt), 'dd MMM, yyyy');
  const formattedShippedAt = format(fromUnixTime(order.shippedAt), 'dd MMM, yyyy');
  return (
    <div className={styles.order__item}>
      <div className={styles.order__heder}>
        <span className={styles.order__number}># <strong>{order.number}</strong></span>
        <span className={styles.order__price}>{order.price} { order.currency}</span>
      </div>
      <div className={styles.order__body}>
        <span className={styles.order__product}>Product: <strong>{order.itemName} X {order.amount}</strong></span>
        <div className={styles.order__date}>
          <span className={styles.order__date__line}>Created At {formattedCreatedAt}</span>
          <span className={styles.order__date__line}>Shipped At {formattedShippedAt}</span>
        </div>
      </div>

    </div>
  );
};

export default OrderItem;