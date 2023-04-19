import { createContext } from 'react';
import { useContext } from 'react';

const StoreContext = createContext(null);

export { StoreContext, useContext };
