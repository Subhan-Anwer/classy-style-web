const Loader = () => {
  return (
    <div className="w-[300px] h-[100px] flex justify-center items-end">
      <div className="w-5 h-[10px] mx-[5px] bg-[#ffb435] rounded-[5px] animate-wave [animation-delay:0s]" />
      <div className="w-5 h-[10px] mx-[5px] bg-[#ffb435] rounded-[5px] animate-wave [animation-delay:0.1s]" />
      <div className="w-5 h-[10px] mx-[5px] bg-[#ffb435] rounded-[5px] animate-wave [animation-delay:0.2s]" />
      <div className="w-5 h-[10px] mx-[5px] bg-[#ffb435] rounded-[5px] animate-wave [animation-delay:0.3s]" />
    </div>
  );
};

export default Loader;
