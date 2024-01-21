"use client";
interface Props {
  register: any;
}
const QuestionTitle = ({ register }: Props) => {
  return (
    <input
      type="text"
      className="input w-full"
      placeholder="عنوان سوال"
      {...register}
    />
  );
};

export default QuestionTitle;
