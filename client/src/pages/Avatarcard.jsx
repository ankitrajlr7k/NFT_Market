import React from 'react';

const Avatarcard = ({ img, name, handle, gradient }) => {
  return (
    <div className='w-full md:w-52 rounded-lg overflow-hidden border border-slate-400/10 pb-6 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/S flex flex-col items-center'>
      <div className={`w-full h-35 mt-6 ${gradient}`}>
        <img src={img} alt={name} className='rounded-full bg-center object-cover w-24 h-24 mx-auto' />
      </div>
      <div className='text-center mt-2'>
        <h3 className='text-lg font-semibold'>{name}</h3>
        <p className='text-sm text-slate-400'>@{handle}</p>
      </div>
    </div>
  );
}

export default Avatarcard;
