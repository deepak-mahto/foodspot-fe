const SearchComponent = (props) => {
  let searchText = "";

  const filterRestaurants = (searchText) => {
    const filteredRestaurants = props.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
    props.filteredRestaurants(filteredRestaurants);
  };

  return (
    <div className="flex justify-center my-6">
      <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden w-full max-w-md">
        <input
          type="text"
          onChange={(e) => {
            searchText = e.target.value;
            filterRestaurants(searchText);
          }}
          className="w-full px-4 py-2 focus:outline-none"
          placeholder="Search Restaurant"
        />

        <button
          onClick={() => filterRestaurants(searchText)}
          className="bg-orange-500 text-white px-6 py-2 hover:bg-orange-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
