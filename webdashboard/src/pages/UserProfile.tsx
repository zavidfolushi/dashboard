import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGetCustomerInfoQuery, useGetOrdersQuery } from '../store/user/user.api';
import UserProfileUI from '../components/userProfile/UserProfileUI';
import Orders from '../components/Orders/Orders';

const UserProfile: FC = () => {
  const { fullName } = useParams<{ fullName?: string }>();
  const [limit, setLimit] = useState(5);

  console.log(limit)

  const handleScrollEnd = () => {
    setLimit(prevLimit => prevLimit + 5);
  };

  const { data: ordersData, isLoading: orderLoading, isError: ordersError } = useGetOrdersQuery({ limit })
  const { data, isLoading, isError } = useGetCustomerInfoQuery({ fullName });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading user data or user not found</div>;

  return (
    <>
      <Link className='px-2' to={'/'}>&larr;  Bach</Link>    
      <div className='flex flex-col md:flex-row gap-10 mt-10 mb-10 px-2'>
        <UserProfileUI user={data} />
        {ordersData && <Orders orders={ordersData} loading={orderLoading} error={ordersError} onScrollEnd={handleScrollEnd} />}
      </div>
  </>
  );
};

export default UserProfile;
