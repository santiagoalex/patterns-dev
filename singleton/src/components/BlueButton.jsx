import { counter } from "../singleton/Object-instance";

const BlueButton = () => {
  let buttonHandler = () => {
    counter.increment();
    console.log("Incremento", counter.getCount());
  };

  return (
    <>
      <section>
        <button
          onClick={() => {
            buttonHandler();
          }}
        >
          Blue
        </button>
      </section>
    </>
  );
};
export default BlueButton;
