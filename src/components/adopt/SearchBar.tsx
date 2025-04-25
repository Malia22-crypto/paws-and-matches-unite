
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ searchTerm, onSearchChange, onSearch }: SearchBarProps) => {
  return (
    <div className="flex-grow">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search by name, breed, location..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchBar;
