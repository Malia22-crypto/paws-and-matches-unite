
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/Layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from "@/hooks/use-toast";
import { Separator } from '@/components/ui/separator';

const rehomingFormSchema = z.object({
  petName: z.string().min(1, "Pet name is required"),
  petType: z.string().min(1, "Pet type is required"),
  breed: z.string().optional(),
  age: z.string().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  size: z.string().min(1, "Size is required"),
  description: z.string().min(10, "Please provide at least 10 characters about your pet"),
  reason: z.string().min(10, "Please explain why you need to rehome your pet"),
  healthInfo: z.string().optional(),
  ownerName: z.string().min(1, "Your name is required"),
  ownerEmail: z.string().email("Please enter a valid email"),
  ownerPhone: z.string().min(1, "Phone number is required")
});

type RehomingFormValues = z.infer<typeof rehomingFormSchema>;

const RehomeProcessPage = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const form = useForm<RehomingFormValues>({
    resolver: zodResolver(rehomingFormSchema),
    defaultValues: {
      petName: "",
      petType: "",
      breed: "",
      age: "",
      gender: "",
      size: "",
      description: "",
      reason: "",
      healthInfo: "",
      ownerName: "",
      ownerEmail: "",
      ownerPhone: ""
    },
  });

  const onSubmit = (data: RehomingFormValues) => {
    console.log("Form submitted with data:", data);
    toast({
      title: "Rehoming request submitted",
      description: "We've received your information and will contact you soon.",
    });
    navigate('/');
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <MainLayout>
      <div className="container mx-auto py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-pet-blue-dark mb-2">Rehome Your Pet</h1>
          <p className="text-gray-600 mb-8">Please fill out this form with information about your pet and why you need to rehome them.</p>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 ? "Pet Information" : step === 2 ? "Rehoming Reason" : "Your Contact Information"}
              </CardTitle>
              <CardDescription>
                Step {step} of 3
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {step === 1 && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="petName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pet Name</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Max" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="petType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pet Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select pet type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="dog">Dog</SelectItem>
                                <SelectItem value="cat">Cat</SelectItem>
                                <SelectItem value="bird">Bird</SelectItem>
                                <SelectItem value="small_animal">Small Animal</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="breed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Breed (if known)</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Golden Retriever" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                          control={form.control}
                          name="age"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Age</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select age" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="baby">Baby</SelectItem>
                                  <SelectItem value="young">Young</SelectItem>
                                  <SelectItem value="adult">Adult</SelectItem>
                                  <SelectItem value="senior">Senior</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="gender"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gender</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select gender" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="male">Male</SelectItem>
                                  <SelectItem value="female">Female</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="size"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Size</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select size" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="small">Small</SelectItem>
                                  <SelectItem value="medium">Medium</SelectItem>
                                  <SelectItem value="large">Large</SelectItem>
                                  <SelectItem value="xlarge">X-Large</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pet Description</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about your pet's personality, likes, dislikes, etc." 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {step === 2 && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Why are you rehoming your pet?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details about your situation" 
                                className="min-h-[150px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Understanding your circumstances helps us find the most suitable new home.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="healthInfo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Health Information (Optional)</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Any medical conditions, medications, or special needs" 
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Please include vaccination status and any chronic conditions.
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  {step === 3 && (
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="ownerName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="ownerEmail"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="ownerPhone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )}
                  
                  <div className="flex justify-between pt-4">
                    {step > 1 && (
                      <Button type="button" variant="outline" onClick={prevStep}>
                        Previous
                      </Button>
                    )}
                    <div className="flex-1" />
                    {step < 3 ? (
                      <Button type="button" onClick={nextStep} className="bg-pet-blue hover:bg-pet-blue-dark">
                        Next
                      </Button>
                    ) : (
                      <Button type="submit" className="bg-pet-blue hover:bg-pet-blue-dark">
                        Submit
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default RehomeProcessPage;
