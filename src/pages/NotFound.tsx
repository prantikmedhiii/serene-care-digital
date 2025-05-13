
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-playfair font-bold text-primary mb-6">404</h1>
        <p className="text-xl md:text-2xl text-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-muted-foreground mb-10">
          The page you are trying to access may have been moved, deleted, or never existed.
          Please check the URL or navigate back to our homepage.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link to="/">Return to Homepage</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
