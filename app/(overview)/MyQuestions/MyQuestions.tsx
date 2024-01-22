import Cart from "@/app/components/Cart";
import Filter from "./Filter";
import AskedQuestion from "./AskedQuestion";
import Pagination from "./Pagination";

const askedQuestions = [
  {
    id: 1,
    title: "سوال تستی",
    answerCount: 1,
    done: true,
    tags: ["اهداف فصل", "اصلاح"],
  },
  {
    id: 2,
    title: "سوال تستی",
    answerCount: 1,
    done: false,
    tags: ["حلقه چیست؟", "اصلاح"],
  },
  {
    id: 3,
    title: "سوال تستی",
    answerCount: 1,
    done: false,
    tags: ["حلقه چیست؟", "اصلاح"],
  },
];

const MyQuestions = () => {
  return (
    <div className="min-w-[335px]">
      <Cart title="سوالات من">
        <div>
          <Filter />
          <hr className="h-px bg-qu-gray-200" />
          {askedQuestions.map(({ answerCount, done, tags, title, id }) => (
            <div className="p-3" key={id}>
              <AskedQuestion
                title={title}
                answerCount={answerCount}
                done={done}
                tags={tags}
              />
            </div>
          ))}
          <Pagination/>
        </div>
      </Cart>
    </div>
  );
};

export default MyQuestions;
