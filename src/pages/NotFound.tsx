
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-pet-cream px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 flex justify-center">
          <div className="rounded-full bg-pet-blue/10 p-6">
            <svg 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-pet-blue"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M8 15h8M15.5 8.5l-7 7M8.5 8.5l7 7" />
            </svg>
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-4 text-pet-blue-dark">404</h1>
        <p className="text-xl text-gray-600 mb-6">Oops! We couldn't find that page</p>
        <p className="text-gray-500 mb-8">
          The page you're looking for doesn't exist or may have been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/">
            <Button className="w-full sm:w-auto bg-pet-blue hover:bg-pet-blue-dark">
              Return to Home
            </Button>
          </Link>
          <Link to="/adopt">
            <Button variant="outline" className="w-full sm:w-auto border-pet-blue text-pet-blue hover:bg-pet-blue/10">
              Browse Pets
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
