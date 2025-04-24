
import React from 'react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  location: string;
  image?: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "We found our perfect companion through Get Your Pet. The adoption process was smooth, and we couldn't be happier with our new family member!",
      author: "Sarah Johnson",
      location: "Boston, MA",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "When we had to rehome our dog due to an unexpected move, Get Your Pet helped us find a loving family who sends us updates regularly. It was a bittersweet experience made easier by their platform.",
      author: "Michael Torres",
      location: "Denver, CO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "Our cat went missing for over a week. We were losing hope until Get Your Pet's Lost & Found matching system connected us with someone who had found her just a few blocks away!",
      author: "Emily Chen",
      location: "Portland, OR",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pet-blue-dark mb-12">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-pet-cream rounded-xl p-6 shadow-md relative">
              <div className="mb-6 text-pet-blue">
                <svg className="h-10 w-10 opacity-20" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-2.2 0-4.1.4-5.7 1.2C2.7 10 1.3 11.3 0 13.5v7h6v10h9V13.5C15 10.5 13 8 10 8zm22 0c-2.2 0-4.1.4-5.7 1.2-1.6.8-3 2.1-4.3 4.3v7h6v10h9V13.5C27 10.5 25 8 22 8z" />
                </svg>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              
              <div className="flex items-center">
                {testimonial.image ? (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                ) : (
                  <div className="h-12 w-12 rounded-full bg-pet-blue text-white flex items-center justify-center mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-pet-blue-dark">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
