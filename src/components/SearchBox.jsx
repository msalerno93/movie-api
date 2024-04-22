const SearchBox = ({searchValue, setSearchValue}) => {
  return (
    <div>
      <input
        className="bg-slate-500 md:w-2/5 sm:w-2/5 h-8 text-xl text-center outline-none rounded-lg placeholder-slate-400 text-black font-bold"
        type="text"
        placeholder="Type To Search Movies"
        onChange={(event) => {setSearchValue(event.target.value)}}
      />
    </div>
  );
};

export default SearchBox;
