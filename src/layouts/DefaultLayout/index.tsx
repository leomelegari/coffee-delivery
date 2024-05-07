import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <div className="m-auto flex h-screen w-full flex-col items-center bg-gradient-pattern bg-cover bg-repeat font-sans dark:bg-zinc-950 dark:bg-none">
        <Outlet />
      </div>
    </>
  );
};
