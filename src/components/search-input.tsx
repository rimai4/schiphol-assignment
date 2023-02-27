import React, { SetStateAction } from 'react';

interface Props {
  value: string;
  setValue: React.Dispatch<SetStateAction<string>>;
}

function SearchInput({ value, setValue }: Props) {
  return (
    <div className="relative mt-4">
      <span className="absolute right-0 flex items-center pr-2">
        <span className="py-1 text-schiphol-blue">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </span>
      </span>

      <input
        value={value}
        type="search"
        className="py-2 text-sm rounded pl-2 focus:outline-none text-schiphol-blue w-full"
        placeholder="Search flights"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
