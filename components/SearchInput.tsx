"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';


const SearchInput = () => {
    const [pencarian, setPencarian] = useState<string>("");
    const router = useRouter();

    return (
        <div className='flex w-full max-w-sm mx-3'>
            <input type="text" value={pencarian} onChange={(e) => setPencarian(e.target.value)} placeholder='Cari Video ..' className='p-1 rounded-lg w-[300px] border-2 border-slate-950' />
            <Button type='submit' onClick={() => router.push(`/?query=${pencarian}`)} className='ml-2'>Cari</Button>
        </div>
    )
}

export default SearchInput