import { useState } from "react";
import Navbar from "../components/Navbar/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link for navigation

const items = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  title: `TITLE ${i + 1}`,
  date: `Date ${i + 1}`,
  type: i % 2 === 0 ? "VIDEO" : "NEWS",
  imageUrl:
    i === 1
      ? "https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
      : "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
}));

const itemsPerPage = 6;

const NewsMediaGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Slice the items array to show only the items for the current page
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle next and previous page buttons
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="flex flex-col p-4 md:p-8 mt-20 bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className="relative h-[250px] w-full overflow-hidden rounded-lg shadow-lg">
        <img
          src="/About.png" // Adjust the path based on where you store your image
          alt="News Header Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl font-semibold text-center">
            NEWS & MEDIA APPEARANCES
          </h1>
        </div>
      </header>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <ChevronLeft />
        </Button>
        <span className="text-lg text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <ChevronRight />
        </Button>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {currentItems.map((item) => (
          <Link
            key={item.id}
            to={`/news/${item.id}`}
            className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold py-1 px-2 rounded-full">
                {item.type}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.date}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function Pressroom() {
  return <NewsMediaGrid />;
}
