import { Helmet } from "react-helmet-async";
import { Intro } from "./components/Intro";
import { CoffeList } from "./components/coffee-list/CoffeeList";

export const Home = () => {
  return (
    <div className="m-auto flex w-full flex-col items-center">
      <Helmet>
        <title>Coffee Delivery | Home</title>
      </Helmet>
      <Intro />
      <CoffeList />
    </div>
  );
};
