import { Steps } from "../../../../components/organisms";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CreateElection() {
  const location = useLocation();
  const path = location.pathname.split("/");
  const currentStage = path[path.length - 1];

  return (
    <div className="w-[95%] h-full pt-10 px-8 flex flex-col  items-center ">
      <h1 className="font-bold text-2xl mb-4">Create Election</h1>
      <Steps location={currentStage} />
      <div className="border rounded-xl mt-8 w-full">
        <Outlet />
      </div>
    </div>
  );
}
