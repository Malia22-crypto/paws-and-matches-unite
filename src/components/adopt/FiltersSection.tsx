
import React from 'react';
import { Filter, FilterX } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';

interface FiltersSectionProps {
  showFilters: boolean;
  setShowFilters: (show: boolean) => void;
  selectedType: string;
  selectedBreed: string;
  selectedGender: string;
  selectedAge: string;
  selectedSize: string;
  isVaccinated: boolean;
  isSpayed: boolean;
  onTypeChange: (value: string) => void;
  onBreedChange: (value: string) => void;
  onGenderChange: (value: string) => void;
  onAgeChange: (value: string) => void;
  onSizeChange: (value: string) => void;
  onVaccinatedChange: (checked: boolean) => void;
  onSpayedChange: (checked: boolean) => void;
  onReset: () => void;
  hasActiveFilters: boolean;
}

const FiltersSection = ({
  showFilters,
  setShowFilters,
  selectedType,
  selectedBreed,
  selectedGender,
  selectedAge,
  selectedSize,
  isVaccinated,
  isSpayed,
  onTypeChange,
  onBreedChange,
  onGenderChange,
  onAgeChange,
  onSizeChange,
  onVaccinatedChange,
  onSpayedChange,
  onReset,
  hasActiveFilters
}: FiltersSectionProps) => {
  return (
    <div>
      <div className="flex gap-2">
        <Button 
          variant={showFilters ? "default" : "outline"}
          className={showFilters 
            ? "bg-pet-blue hover:bg-pet-blue-dark text-white" 
            : "border-pet-blue text-pet-blue hover:bg-pet-blue/10"}
          onClick={() => setShowFilters(!showFilters)}
          aria-expanded={showFilters}
        >
          {showFilters ? (
            <FilterX className="mr-2 h-4 w-4" />
          ) : (
            <Filter className="mr-2 h-4 w-4" />
          )}
          {showFilters ? 'Hide Filters' : 'Filters'}
        </Button>
        
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            onClick={onReset}
            className="hover:bg-red-50 hover:text-red-600 text-gray-500"
          >
            Reset
          </Button>
        )}
      </div>
      
      <Collapsible open={showFilters} onOpenChange={setShowFilters}>
        <CollapsibleContent>
          <div className="mt-4 pt-4 border-t border-gray-200 bg-white rounded-lg shadow-sm p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pet Type</label>
                <Select value={selectedType} onValueChange={onTypeChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">Any type</SelectItem>
                    <SelectItem value="dog">Dogs</SelectItem>
                    <SelectItem value="cat">Cats</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Breed</label>
                <Select value={selectedBreed} onValueChange={onBreedChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select breed" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">Any breed</SelectItem>
                    <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                    <SelectItem value="labrador">Labrador</SelectItem>
                    <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                    <SelectItem value="siamese">Siamese</SelectItem>
                    <SelectItem value="maine-coon">Maine Coon</SelectItem>
                    <SelectItem value="tabby">Tabby</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <Select value={selectedGender} onValueChange={onGenderChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">Any gender</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <Select value={selectedAge} onValueChange={onAgeChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select age" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">Any age</SelectItem>
                    <SelectItem value="baby">Baby (0-1 year)</SelectItem>
                    <SelectItem value="young">Young (1-3 years)</SelectItem>
                    <SelectItem value="adult">Adult (3-7 years)</SelectItem>
                    <SelectItem value="senior">Senior (7+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Size</label>
                <Select value={selectedSize} onValueChange={onSizeChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="all">Any size</SelectItem>
                    <SelectItem value="small">Small</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="large">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Checkbox 
                    id="vaccinated" 
                    checked={isVaccinated}
                    onCheckedChange={(checked) => onVaccinatedChange(checked as boolean)}
                    className="data-[state=checked]:bg-pet-blue data-[state=checked]:border-pet-blue"
                  />
                  <label 
                    htmlFor="vaccinated" 
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    Vaccinated
                  </label>
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox 
                    id="spayed" 
                    checked={isSpayed}
                    onCheckedChange={(checked) => onSpayedChange(checked as boolean)}
                    className="data-[state=checked]:bg-pet-blue data-[state=checked]:border-pet-blue"
                  />
                  <label 
                    htmlFor="spayed" 
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    Spayed/Neutered
                  </label>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default FiltersSection;
