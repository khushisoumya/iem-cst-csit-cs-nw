import PageHero from "../components/common/PageHero";
import HODCard from "../components/home/HODCard";

import buildingImg from "../assets/images/building2.png";

function Home() {
  return (
    <>
      <PageHero
        eyebrow="Department of"
        titleClassName="lg:text-[40px] xl:text-[44px]"
        title={
          <>
            Computer Science &
            <br />
            Technology
            <br />
            and
            <br />
            Computer Science &
            <br />
            Information Technology
          </>
        }
        description="Empowering innovation through quality education, research and technology."
        image={buildingImg}
      />

      <HODCard />
    </>
  );
}

export default Home;