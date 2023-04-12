import { createContext } from 'react';
import { useContext } from 'react';

const StoreContext = createContext(null);
const LoaderContext = createContext(null);

export { StoreContext, useContext };
