import React, { useState } from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
const MAX_RATING = 5;
const MIN_RATING = 1;
const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) +
      MIN_RATING
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div>
      <p>{category}</p>
      <Image
        src={image}
        height={200}
        width={200}
        objectFit='contain'
      />
      <h4>{title}</h4>
      <div className='flex'>
        {Array(rating)
          .fill()
          .map((_, m) => (
            <StarIcon className=' h-6 w-6 bg-blue-500' />
          ))}
      </div>
      <p>{description}</p>
      <div>${price}</div>
    </div>
  );
};

export default Product;
