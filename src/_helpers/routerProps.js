import React from 'react';
import paths from './paths';
import Cargo from '../pages/Cargo/Cargo';

const routerProps = {
  cargo: {
    path: paths.cargo,
    element: <Cargo />,
  },
};

export default routerProps;
