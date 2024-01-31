import React from 'react';
import useListings from '../hooks/useListings';

const ListingsContext = React.createContext<any[]>([]);

export function useListingsContext() {
  return React.useContext(ListingsContext);
}

export function ListingsProvider(props: any) {
  const listings = useListings();

  if (!listings) return null;

  return (
    <ListingsContext.Provider value={listings}>
      {props.children}
    </ListingsContext.Provider>
  );
}
