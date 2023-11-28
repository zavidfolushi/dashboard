import React, { FC, useState } from 'react';
import { useGetAllCountriesQuery, useGetAllCustomersQuery, useGetAllGendersQuery } from '../store/user/user.api';
import { IUsers } from '../models/models';
import UserCard from '../components/userCard/UserCard';
import { useDebounce } from '../hooks/debounce';

const Dashboard: FC = () => {
  const [limit, setLimit] = useState(20);
  const [searchTerm, setSearchTerm] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const shouldFetch = debouncedSearchTerm.length >= 3 || debouncedSearchTerm.length === 0;

  const { data, isLoading, isError, isFetching } = useGetAllCustomersQuery(
    { limit, search: shouldFetch ? debouncedSearchTerm : '', gender: genderFilter, country: countryFilter },
    { skip: !shouldFetch }
  );
  const { data: gendersData } = useGetAllGendersQuery('')
  const { data: countryData } = useGetAllCountriesQuery('')


  const loadMore = () => {
    setLimit(prevLimit => prevLimit + 20);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('')
    setGenderFilter('')
    setCountryFilter('')
    setLimit(20)
  }

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryFilter(e.target.value);
  };

  window.onscroll = function () {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      loadMore();
    }
  };

  return (
    <>
      <div className='flex flex-wrap gap-5 px-2'>
        <input
          type="text"
          className='border border-cyan-900 py-2 px-4 w-full sm:w-[300px]'
          placeholder='Search customers...'
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <select
          onChange={handleGenderChange}
          className="border border-cyan-900 py-2 px-4 w-full sm:w-[300px]"
          value={genderFilter}
        >
          <option value="">All Genders</option>
          {gendersData && gendersData.map(gender => (
            <option key={gender} value={gender}>{gender}</option>
          ))}
        </select>
        <select
          onChange={handleCountryChange}
          className="border border-cyan-900 py-2 px-4 w-full sm:w-[300px]"
          value={countryFilter}
        >
          <option value="">All Countries</option>
          {countryData && countryData.map(country => (
            <option key={country} value={country}>{country}</option>
          ))}
        </select>
        <button
          onClick={clearFilters}
          className="bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded shadow-lg hover:shadow-xl transition duration-200 w-full sm:w-auto"
        >
          Clear filters
        </button>
      </div>

      <div className='justify-center mx-auto flex flex-wrap gap-8 mt-12 mb-12'>
      {isLoading && <p className='text-center'>Loading...</p>}
      {isError && <p className='text-center'>Something went wrong...</p>}
        {data && data.map((user: IUsers) => <UserCard key={user.email} user={user} />)}
        {data && data.length < 1 && <p className='text-center'> There is no user for this request </p>}
      {isFetching && <p className='text-center'>Loading more...</p>}
      </div>
    </>
  );
};

export default Dashboard;

