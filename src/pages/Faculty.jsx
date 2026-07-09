// import PageBanner from "../components/layout/PageBanner";
import PageHero from "../components/common/PageHero";
import FacultyGrid from "../components/faculty/FacultyGrid";

import bannerImage from "../assets/images/building2.png";

function Faculty() {
  return (
    <>
      {/* <PageBanner
        title="Faculty Members"
        subtitle="Meet our dedicated educators"
        image={bannerImage}
      /> */}

       <PageHero
        title="Faculty Members"
        description="Meet our experienced educators, researchers and mentors."
      />

      <FacultyGrid />
    </>
  );
}

export default Faculty;