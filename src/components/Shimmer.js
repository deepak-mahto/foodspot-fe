const Shimmer = () => {
  const numberOfShimmerCards = 12;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {Array.from({ length: numberOfShimmerCards }, (_, index) => (
        <div
          key={index}
          className="bg-gray-200 rounded-lg shadow-md overflow-hidden animate-pulse"
        >
          <div className="w-full h-48 bg-gray-300"></div>

          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
