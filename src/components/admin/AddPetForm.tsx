import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from '@/components/ui/use-toast';
import { addPet } from '@/services/petService';
import { Pet } from '@/components/PetCard';

interface PetFormData {
  name: string;
  type: "dog" | "cat" | "other";  // Fixed type to match the select options
  breed: string;
  age: string;
  gender: "male" | "female" | "unknown";  // Fixed type to match the select options
  location: string;
  description: string;
  images: File[];
}

const AddPetForm = () => {
  const [formData, setFormData] = useState<PetFormData>({
    name: '',
    type: "dog",  // Default value
    breed: '',
    age: '',
    gender: "male",  // Default value
    location: '',
    description: '',
    images: [],
  });
  
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSelectChange = (name: string, value: string) => {
    if (name === 'type') {
      setFormData({ ...formData, [name]: value as "dog" | "cat" | "other" });
    } else if (name === 'gender') {
      setFormData({ ...formData, [name]: value as "male" | "female" | "unknown" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const urls: string[] = [];
    
    files.forEach(file => {
      const url = URL.createObjectURL(file);
      urls.push(url);
    });
    
    setFormData({ ...formData, images: [...formData.images, ...files] });
    setPreviewUrls([...previewUrls, ...urls]);
  };
  
  const handleRemoveImage = (index: number) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    const updatedPreviews = previewUrls.filter((_, i) => i !== index);
    
    setFormData({ ...formData, images: updatedImages });
    setPreviewUrls(updatedPreviews);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name || !formData.type || !formData.breed || !formData.age || 
        !formData.gender || !formData.location || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }
    
    if (formData.images.length === 0) {
      toast({
        title: "No Images",
        description: "Please upload at least one image of the pet.",
        variant: "destructive"
      });
      return;
    }
    
    // Use the first image URL for simplicity
    // In a real app, you would upload these images to a storage service
    const imageUrl = previewUrls[0];
    
    // Create new pet object
    const newPet: Omit<Pet, 'id'> = {
      name: formData.name,
      type: formData.type,
      breed: formData.breed,
      age: formData.age,
      gender: formData.gender,
      location: formData.location,
      description: formData.description,
      image: imageUrl,
      status: "available"
    };
    
    // Add pet using our service
    addPet(newPet);
    
    toast({
      title: "Pet Added Successfully",
      description: `${formData.name} has been added to available pets.`,
      variant: "default"
    });
    
    // Reset form
    setFormData({
      name: '',
      type: "dog",
      breed: '',
      age: '',
      gender: "male",
      location: '',
      description: '',
      images: [],
    });
    setPreviewUrls([]);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Pet Name</Label>
            <Input 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter pet name"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="type">Pet Type</Label>
            <Select 
              value={formData.type}
              onValueChange={(value) => handleSelectChange('type', value)}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Select pet type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dog">Dog</SelectItem>
                <SelectItem value="cat">Cat</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="breed">Breed</Label>
            <Input 
              id="breed" 
              name="breed" 
              value={formData.breed}
              onChange={handleInputChange}
              placeholder="Enter breed"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="age">Age</Label>
            <Input 
              id="age" 
              name="age" 
              value={formData.age}
              onChange={handleInputChange}
              placeholder="Enter age (e.g., 2 years)"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="unknown">Unknown</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="location">Location</Label>
            <Input 
              id="location" 
              name="location" 
              value={formData.location}
              onChange={handleInputChange}
              placeholder="Enter location"
              required
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              name="description" 
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter pet description, personality traits, special needs, etc."
              rows={5}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="images">Pet Photos</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 mt-1">
              <Input 
                id="images" 
                type="file"
                onChange={handleImageChange}
                multiple
                accept="image/*"
                className="hidden"
              />
              <Label htmlFor="images" className="cursor-pointer block text-center py-4 text-gray-500">
                Click to upload images or drag and drop
                <br />
                <span className="text-xs">PNG, JPG up to 5MB</span>
              </Label>
            </div>
            
            {previewUrls.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {previewUrls.map((url, index) => (
                  <div key={index} className="relative rounded-lg overflow-hidden h-24">
                    <img 
                      src={url} 
                      alt={`Preview ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-1 right-1 h-6 w-6"
                      onClick={() => handleRemoveImage(index)}
                    >
                      <span className="sr-only">Remove</span>
                      ×
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" size="lg">
          Add Pet to Available List
        </Button>
      </div>
    </form>
  );
};

export default AddPetForm;
