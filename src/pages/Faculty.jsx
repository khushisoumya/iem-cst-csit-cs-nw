
import PageHero from "../components/common/PageHero";
import FacultyGrid from "../components/faculty/FacultyGrid";
import FacultyHeader from "../components/faculty/FacultyHeader";



function Faculty() {
  return (
    <>
     
       <PageHero
        title="Faculty Members"
        description="Meet our experienced educators, researchers and mentors."
      />
      <FacultyHeader />

      <FacultyGrid />
    </>
  );
}

export default Faculty;