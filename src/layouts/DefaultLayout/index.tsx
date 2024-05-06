import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <div className="w-full flex flex-col items-center m-auto">
      <Header />
      <Outlet />
    </div>
  );
};
