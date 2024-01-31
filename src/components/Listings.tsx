import React from 'react';
import { IListing, Listing } from './Listing';
import { ListingsGrid } from './ListingsGrid';
import { useListingsContext } from '../context/ListingsProvider';

export default function Listings() {
  const listings = useListingsContext();

  return (
		<ListingsGrid>
			{listings.map((listing: IListing) => (
				<Listing key={listing.id} listing={listing} />
			))}
		</ListingsGrid>
	);
}
