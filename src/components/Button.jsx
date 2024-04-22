const Button = ({details}) => {
  return (
    <div className="mt-2 items-center justify-center text-center">
      <button className="bg-blue-400 hover:bg-blue-500 text-black font-bold text-xl py-1 px-2 lg:w-2/5 w-1/5 rounded-lg">
      {details}
      </button>
    </div>
  );
};

export default Button;
