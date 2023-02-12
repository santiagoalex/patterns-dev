import { counter } from "../singleton/Object-instance";

const RedButton = () => {
  let buttonHandler = () => {
    counter.decrement();
    console.log("Disminuyo", counter.getCount());
  };

  return (
    <>
      <section>
        <button
          onClick={() => {
            buttonHandler();
          }}
        >
          Red
        </button>
      </section>
    </>
  );
};
export default RedButton;
