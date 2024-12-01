import Link from 'next/link'
import React from 'react'



const MenuItem = ({
  title,
  address,
  Icon,
}: {
  title: string;
  address: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => {
  return (
    <Link href={address} className='hover:text-amber-500'>
      
        <Icon className="text-2xl sm:hidden" /> 
        <span className='uppercase hidden sm:inline text-sm'>{title}</span>
     
    </Link>
  );
};

export default MenuItem;


