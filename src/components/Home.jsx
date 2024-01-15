// import MidComp from "./MidComp";
import TopComp from "./TopComp";
import CurrencyProvider from "./context/CurrencyContext";
import CurrCoverter from "./currCoverter";

const Home = () => {
  return (
    <main className=" w-full h-full relative">
      <section className="w-full h-[15rem] ">
        <TopComp />
      </section>
 

      <section className="gradBg w-[80%] m-auto rounded-3xl sm:h-[40rem] border-2 border-transparent shadow-2xl">
      {/* the context */}
      <CurrencyProvider>
      <CurrCoverter />
      </CurrencyProvider>
      </section>
    </main>
  );
};

export default Home;
