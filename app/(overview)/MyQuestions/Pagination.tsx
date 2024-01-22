import { convertToPersianNumbers } from "@/app/utils";

const pages = [
  {
    number: 1,
    active: true,
  },
  {
    number: 2,
    active: false,
  },
  {
    number: 3,
    active: false,
  },
  {
    number: 4,
    active: false,
  },
  {
    number: 5,
    active: false,
  },
];
const lastPage = {
  number: 6,
};
const Pagination = () => {
  return (
    <div className="p-2 text-xs justify-center  flex">
      <div className="border flex rounded">
        {pages.map(({ active, number }) => (
          <div
            className={` p-4 cursor-pointer py-[10px] flex justify-center items-center border-[0.1px] border-qu-gray-100 text-qu-gray-900  ${
              active && "bg-qu-gray-100"
            } `}
            key={number}
          >
            <span className="inline text-center align-text-[center]">
              {convertToPersianNumbers(number.toString())}
            </span>
          </div>
        ))}

        <div className="cursor-pointer p-4 py-[10px] flex justify-center items-center border-[0.1px] border-qu-gray-100 text-qu-gray-900 ">
          <span className="inline text-center align-text-[center]">...</span>
        </div>
        <div className="cursor-pointer p-4 py-[10px] flex justify-center items-center border-[0.1px] border-qu-gray-100 text-qu-gray-900 ">
          <span className="inline text-center align-text-[center]">
            {convertToPersianNumbers(lastPage.number.toString())}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
