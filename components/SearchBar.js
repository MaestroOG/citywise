'use client';
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const SearchBar = ({ city }) => {
    const router = useRouter();
    const inputRef = useRef(null);

    const handleCancelClick = () => {
        router.push('/'); // Clears the city query param
    };

    return (
        <div className="bg-gray-420 px-4 py-3 rounded-xl flex items-center justify-between w-full">
            <form method="GET" className="flex items-center gap-2 w-full">
                <button type="submit">
                    <Image
                        src="/images/search.png"
                        width={24}
                        height={24}
                        alt="search"
                        className="cursor-pointer"
                    />
                </button>
                <input
                    ref={inputRef}
                    type="text"
                    name="city"
                    placeholder="Enter city name"
                    className="w-full outline-none bg-transparent"
                    defaultValue={city}
                />
            </form>

            <Image
                src="/images/cancel.png"
                width={24}
                height={24}
                alt="cancel"
                className="cursor-pointer"
                onClick={handleCancelClick}
            />
        </div>
    );
};

export default SearchBar;
