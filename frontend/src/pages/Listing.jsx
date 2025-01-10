import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useProperties from '../hooks/useProperties'
import { PuffLoader } from 'react-spinners'
import Item from '../components/Item'

const Listing = () => {
  const [filter, setFilter] = useState()
  const [data, isError, isLoading] = useProperties()
  if (isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height={80}
          width={80}
          radius={1}
          color="#555"
          aria-label="puff-loading"
        />
      </div>
    )
  }
  return (
    <main className="my-24">
      <div className="max-padd-container py-10 bg-gradient-to-r from-[#edf1c9] via-white to-white">
        <div className="">
          <SearchBar filter={filter} setFilter={setFilter} />
          {/* CONTAINER */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {data
              .filter(
                (property) =>
                  property.title ||
                  ''?.toLowerCase().includes(filter.toLowerCase()) ||
                  property.city ||
                  ''?.toLowerCase().includes(filter.toLowerCase()) ||
                  property.country ||
                  ''?.toLowerCase().includes(filter.toLowerCase())
              )
              .map((property) => (
                <Item key={property.id} property={property} />
              ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listing
