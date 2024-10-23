import Form from "./components/form";
import Principal from "./components/home";
import How from "./components/how";
import MoreClients from "./components/moreClients";
import Solutions from "./components/solutions";
import Teams from "./components/teams";

export default function Home() {
  return (
    <div className=" w-full flex flex-col justify-center items-center">
      <Principal />
      <How />
      <Solutions />
      <MoreClients />
      <Teams />

      <Form />
    </div>
  );
}
