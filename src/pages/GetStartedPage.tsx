import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import GetStartedCard from "../components/GetStartedCard";
import { getStartedPageData as data } from "../assets/getStartedPageData";

export default function GetStartedPage() {
  const joinData = data.find((datum) => datum.url.includes("join"));
  const createBaseData = data.find((datum) => datum.url.includes("create"));

  if (!joinData || !createBaseData) {
    console.error(data);

    return <p>Something went wrong.</p>;
  }

  return (
    <section id="get-started" className="flex flex-col items-center w-full">
      <Title text="Get Started" />
      <Subtitle text="Join or Create a Base" />
      <div
        id="get-started-choice"
        className="flex flex-col md:flex-row gap-4 w-full my-8 md:my-16"
      >
        {/* Join  */}
        <GetStartedCard
          title={joinData.text}
          description={joinData.description}
          icon={joinData.icon}
          url={joinData.url}
        />

        {/* Create */}
        <GetStartedCard
          title={createBaseData.text}
          description={createBaseData.description}
          icon={createBaseData.icon}
          url={createBaseData.url}
        />
      </div>
    </section>
  );
}
