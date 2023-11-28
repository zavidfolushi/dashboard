import React, { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetCustomerInfoQuery, useGetOrdersQuery } from '../store/user/user.api';
import UserProfileUI from '../components/userProfile/UserProfileUI';
import Orders from '../components/Orders/Orders';

const UserProfile: FC = () => {
  const { fullName } = useParams<{ fullName?: string }>();
  const [limit, setLimit] = useState(20);

  const { data: ordersData, isLoading: orderLoading, isError: ordersError } = useGetOrdersQuery({ limit })
  const { data, isLoading, isError } = useGetCustomerInfoQuery({ fullName });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading user data or user not found</div>;

  return (
    <div className='flex justify-between'>
      <UserProfileUI user={data} />
      {ordersData && <Orders orders={ordersData} loading={orderLoading} error={ordersError} />}
    </div>
  );
};

export default UserProfile;
