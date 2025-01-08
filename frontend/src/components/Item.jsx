import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from 'react-icons/md';
import { CgRuler } from 'react-icons/cg';

const Item = ({ property }) => {
  if (!property || !property.facilities) {
    return <div>Loading...</div>; // Xử lý khi property không tồn tại
  }

  return (
    <div className='rounded-lg overflow-hidden bg-white ring-1 ring-slate-900/5'>
      {/* IMAGE */}
      <div className='relative'>
        <img
          src={property.image || '/default-image.jpg'}
          alt={property.title || 'Default title'}
          className='h-[13rem] w-full aspect-square object-cover'
        />
        <div className='absolute top-4 right-6'>
          <FaHeart className='text-white text-lg' />
        </div>
      </div>
      {/* INFO */}
      <div className='m-3'>
        <div className='flexBetween'>
          <h5 className='bold-16 my-1 text-[#65b800]'>{property.city || 'Unknown City'}</h5>
          <h4 className='h4'>${property.price || 0}.00</h4>
        </div>
        <h4 className='medium-18 line-clamp-1'>{property.title || 'No Title'}</h4>
        <div className='flex gap-x-2 py-2'>
          <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <MdOutlineBed /> {property.facilities?.bedrooms || 0}
          </div>
          <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <MdOutlineBathtub /> {property.facilities?.bathrooms || 0}
          </div>
          <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <MdOutlineGarage /> {property.facilities?.parkings || 0}
          </div>
          <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'>
            <CgRuler /> 400
          </div>
        </div>
        <p className='pt-2 mb-4 line-clamp-2 text-black'>{property.description || 'No description available'}</p>
      </div>
    </div>
  );
};

export default Item;
