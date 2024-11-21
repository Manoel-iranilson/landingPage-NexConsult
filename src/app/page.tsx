import Principal from "./components/home";
import Clients from "./components/clients";
import Consultant from "./components/consultant";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Principal />
      <Clients />
      <Consultant />
    </div>
  );
}
