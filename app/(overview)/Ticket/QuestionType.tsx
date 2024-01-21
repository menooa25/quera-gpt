"use client";
interface Props {
  register: any;
}
const questions = [
  { value: 0, text: "مسئله" },
  { value: 1, text: "اصلاح کد" },
  { value: 2, text: "حلقه چیست؟" },
];

const QuestionType = ({ register }: Props) => {
  return (
    <div className="input w-full  text-black text-opacity-35">
      <select
        required
        {...register}
        className="focus-visible:outline-none w-full"
      >
        {questions.map(({ text, value }) => (
          <option
            className="text-black text-opacity-100"
            value={value}
            key={value}
          >
            {text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default QuestionType;
