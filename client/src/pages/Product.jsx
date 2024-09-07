import React from 'react'
import nfts from '../../public/data/nft'
import Card from './Card'

const Product = () => {
  return (
    <section className='p-4 pb-24 text-white'>
      <div className='container max-w-6xl mx-auto overflow-hidden'>

        <div className='flex flex-col justify-center justify-between items-center space-y-5'>
          <h1 className='text-2xl md:text-3xl font-medium'>
            Products
          </h1>
          <div className='flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 text-indigo-600 font-semibold'>
            <p className='text-slate-400'>Discover our hottest NFTs, featuring exclusive digital artwork, rare collectibles, and limited-edition items. Elevate your collection with these trending pieces, showcasing exceptional creativity and value in the NFT world.</p>

          </div>
        </div>
      </div>
      <div className='grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12 items-center justify-center ml-20'>
        {
          nfts.map((item, i) => (
            <Card key={i} item={item} />
          ))
        }
      </div>


    </section>
  )
}

export default Product