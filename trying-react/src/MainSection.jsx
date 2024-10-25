import MyButton from "./MyButton";

const MainSection = () => {
  const btns = ["bt0", "bt1", "bt2"];
  return (
    <section>
      <h2>MainSection</h2>
      {btns.map((it) => (
        <MyButton key={it} buttonText={it} />
      ))}
    </section>
  );
};

export default MainSection;
