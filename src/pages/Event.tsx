import Header from "../components/Header";
import SiderBar from "../components/SiderBar";
import Video from "../components/Video";

export default function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 ">
        <Video />
        <SiderBar />
      </main>
    </div>
  );
}
