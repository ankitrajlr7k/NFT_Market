import React, { useState } from 'react';
import { AiFillHeart, AiOutlineClockCircle } from 'react-icons/ai';
import { FaEthereum } from 'react-icons/fa';
import BidModal from '../components/modal/BidModal';

const Card = ({ item }) => {
  const { img, title, price, likes, sale } = item;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidAmount, setBidAmount] = useState(price);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleBidSubmit = () => {
    // Define your submission logic here or use it in place of toggleModal if intended
    console.log("Submitting bid:", { fullName, email, bidAmount });
    const data = {
      fullName: fullName,
      email: email,
      amount: bidAmount
    }
    console.log(data);
    toggleModal();
  };

  return (
    <>
      <div className='flex group flex-col space-y-10 rounded-lg overflow-hidden border border-slate-400/10 pb-8 hover:shadow-xl duration-500 ease-in-out hover:shadow-white/5 relative'>
        <div className='flex flex-col items-start relative'>
          <img src={img} alt="" className='w-full object-cover' />
          {sale && (
            <div className='flex space-x-2 items-center justify-center px-4 py-1 bg-gradient-to-r from-red-400 via-fuchsia-500 to-indigo-500 rounded-xl absolute bottom-5 left-5'>
              <AiOutlineClockCircle />
              <p className='text-xs'>65 : 02 : 18 : 27</p>
            </div>
          )}
        </div>
        <div className='px-6 grid-flow-col space-y-3'>
          <h3>{title}</h3>
          <div>
            <div className='flex space-x-2 text-indigo-600 items-center'>
              <FaEthereum size={18} />
              <p className='text-sm font-semibold'>{price} ETH</p>
            </div>
            <div className='flex items-center space-x-2'>
              <AiFillHeart size={18} className='text-rose-700' />
              <p className='text-sm text-slate-400 font-semibold'>{likes}</p>
            </div>
          </div>
        </div>
        <div className='absolute hidden top-1/4 left-1/3 md:left-1/4 group-hover:flex animate-bounce transition-all ease-in-out duration-1000'>
          <button
            onClick={toggleModal}
            className='text-sm px-6 py-2 bg-indigo-600 rounded-md duration-200 ease-in-out'
          >
            Place bid
          </button>
        </div>
      </div>
      <BidModal
        isOpen={isModalOpen}
        onClose={toggleModal}
        onBidSubmit={handleBidSubmit}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        bidAmount={bidAmount}
        setBidAmount={setBidAmount}
      />
    </>
  );
};

export default Card;
