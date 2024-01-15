// import MidComp from "./MidComp";
import TopComp from "./TopComp";
import CurrencyProvider from "./context/CurrencyContext";
import CurrCoverter from "./currCoverter";

const Home = () => {
  return (
    <main className=" w-full h-full relative">
      <section className="w-full h-[10rem] border-2 bg-gray-100">
        <TopComp />
      </section>

      {/* <section className="w-full h-auto top-[30%]  border-2 border-red-600 absolute ">
        <CurrCoverter  />
      </section> */}

      <section className="gradBg w-full h-[50rem] border-2 bg-gray-100">
      {/* the context */}
      <CurrencyProvider>
      <CurrCoverter />
      </CurrencyProvider>
      </section>
    </main>
  );
};

export default Home;
