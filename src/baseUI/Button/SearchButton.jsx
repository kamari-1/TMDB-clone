const SearchButton = (props) => {
  return (
    <button
      type="submit"
      {...props}
      value="Search"
      className="h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-SearchButton hover:text-tmdbDarkBlue inline-flex justify-center items-center"
    >
      Search
    </button>
  );
};

export default SearchButton;
