import { Hero } from "@/Components/Component/Hero.tsx/Hero";
import { Foter } from "@/Components/Layout/Foter/Foter";
import { Header } from "@/Components/Layout/Menu/Header";

const Menu: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Foter />
    </>
  );
};

export { Menu };
