import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';

// import Dev from './apiPostButton';
import Dev from './ReservationPostButton';
// import Dev from './NewAccount';
// import Dev from './Reservation';
import store from '../stores';
import { theme } from '../themes/index';

const DevComponent: React.VFC = () => {
  console.log('dev start');
  const store = useSelector(s => s);
  console.log('stores', store);
  return <Dev />;
};

const Develop: React.VFC = () => {
  // return <div></div>;

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <DevComponent />
      </Provider>
    </ThemeProvider>
  );
};

export default Develop;
