import React, { FC } from 'react';
import { IUsers } from '../../models/models';
import styles from '../userCard/UserCard.module.scss'
import { Link } from 'react-router-dom';

export interface UserCardProps{
  user: IUsers;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <Link to={`/${user.firstName}${user.lastName}`}>
    <div className={styles.card}>
        <div className={styles.card__img}>
          <img src={require('../../assets/img/user-icon-placeholder.png')} alt="phone" />
        </div>
        <div className={styles.card__body}>
          <div className={styles.card__name}>
            <span>{user.firstName} {user.lastName}</span>
          </div>
          <span className={styles.card__email}>{user.email}</span>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;