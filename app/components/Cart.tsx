import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}
const Cart = ({ title, children }: Props) => {
  return (
    <div className="rounded-md border border-qu-gray-200 max-w-[690px]">
      <div className="p-3 bg-qu-gray-100">
        <span className="text-sm font-bold">{title}</span>
      </div>

      {children}
    </div>
  );
};

export default Cart;
