'use client'

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState, Suspense } from 'react';

const NavbarItem = ({ title, param }: { title: string; param: string }) => {
  const searchParams = useSearchParams();
  const [genre, setGenre] = useState<string | null>(null);

  // Use useEffect to get genre dynamically and unwrap the Promise
  useEffect(() => {
    const genreParam = searchParams.get('genre');
    setGenre(genreParam);
  }, [searchParams]);

  return (
    <Link href={`/?genre=${param}`}>
      <span
        className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg' : ''}`}
      >
        {title}
      </span>
    </Link>
  );
};

const NavbarItemWithSuspense = ({ title, param }: { title: string; param: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavbarItem title={title} param={param} />
    </Suspense>
  );
};

export default NavbarItemWithSuspense;
