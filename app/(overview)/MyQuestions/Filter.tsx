import { IoMdArrowDropdown } from "react-icons/io";
const Filter = () => {
  return (
    <div className="py-2 px-3 flex justify-between">
      <span className="text-qu-gray-900 text-sm">فیلتر</span>
      <IoMdArrowDropdown />
    </div>
  );
};

export default Filter;
