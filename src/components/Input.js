import HStack from "../Layout/HStack";

const Input = ({ icon = null, type, placeholder, set }) => {
  return (
    <HStack style='items-center space-x-0  shadow-xl shadow-black px-6 py-3 rounded-lg w-full md:w-1/2'>
      {icon}
      <input
        type={type}
        className=' bg-transparent  h-10 rounded-lg px-4  w-full outline-none'
        placeholder={placeholder}
        onChange={(e) => {
          set(e.target.value);
        }}
      ></input>
    </HStack>
  );
};
export default Input;
