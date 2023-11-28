import React, { FC } from 'react';
import { IUsers } from '../../models/models';
import styles from './UserProfileUI.module.scss'

export interface UserProfileUIProps{
  user: IUsers;
}

const UserProfileUI: FC<UserProfileUIProps> = ({user}) => {
  return (
    <div className={styles.user__profile}>
      <h1 className="text-4xl font-bold mb-12 uppercase">profile</h1>
        <div className={styles.user__img}>
          <img src={require('../../assets/img/user-icon-placeholder.png')} alt="phone" />
        </div>
        <div className={styles.user__body}>
          <div className={styles.user__prop}>
            <span>First Name: <strong>{user.firstName}</strong></span>
          </div>
          <div className={styles.user__prop}>
            <span>Last Name: <strong>{user.lastName}</strong></span>
          </div>
          <div className={styles.user__prop}>
            <span>Gender: <strong>{user.gender}</strong></span>
          </div>
          <div className={styles.user__prop}>
            <span>Location: <strong>{user.country}, {user.state}, {user.city}, {user.postCode}</strong></span>
          </div>
          <div className={styles.user__prop}>
            <span>Address: <strong>{user.street}, { user.streetNumber}</strong></span>
          </div>
          <div className={styles.user__prop}>
            <span>Email: <strong>{user.email}</strong></span>
          </div>
        </div>
    </div>
  );
};

export default UserProfileUI;