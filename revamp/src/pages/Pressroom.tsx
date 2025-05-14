import { useState } from "react";
import Navbar from "../components/Navbar/Navbar"; // Import Navbar
import Footer from "@/components/Footer"; // Import Footer
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
    <div className="flex flex-col">
      {/* Navbar */}
      <Navbar />
      <section className="relative mb-10">
        <div className="w-full h-[500px] bg-[url('/Pressroom/PressroomBG.png')] bg-cover bg-center rounded-lg relative group">
          {/* Overlay */}
          <div className="absolute inset-0 bg-PRIMEblue opacity-50"></div>{" "}
          {/* Updated to match Careers color */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center text-PRIMEwhite text-center px-4"
          >
            <h1 className="text-[36pt] sm:text-[48pt] font-bold uppercase">
              News & Media Apperances
            </h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="inline-flex items-center px-6 py-3 border-2 border-PRIMEwhite rounded-full text-lg font-semibold mt-4"
            >
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-semibold">News & Media</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-[1400px] flex flex-col px-15 mx-auto">
        {/* Pagination */}
        <div className="flex justify-end items-center gap-4 mt-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 my-8">
          {currentItems.map((item) => (
            <Link
              key={item.id}
              to={`/news/${item.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-101 w-[400px] h-[430px]"
            >
              <div className="relative h-[320px]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="object-cover rounded-t-lg w-full h-full"
                />
                <span className="absolute top-4 right-4 bg-PRIMEblue text-white text-xs font-bold py-1 px-2 rounded-full">
                  {item.type}
                </span>
              </div>
              <div className="px-6 pt-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-PRIMEgray">{item.date}</p>
                <Link
                  key={item.id}
                  to={`/news/${item.id}`}
                  className="text-center text-sm text-PRIMEgray underline"
                >
                  {" "}
                  View Details
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default function Pressroom() {
  return <NewsMediaGrid />;
}
