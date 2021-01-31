import React, { useEffect } from 'react';
import Search from '../Search';
import HeaderProfile from '../../components/HeaderProfile';
import  Footer  from '../../components/Footer';
import { useAuth } from '../../hooks/auth';
import { useDispatch } from 'react-redux';
import { getProfileInformationsRequest } from '../../store/modules/profile/actions';

const Home: React.FC = () => {
  const { user } = useAuth();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfileInformationsRequest(user))
  }, [user, dispatch])

  return (
    <>
      <HeaderProfile />
      <Search />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
