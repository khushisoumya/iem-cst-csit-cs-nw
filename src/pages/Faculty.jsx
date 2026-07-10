
import PageHero from "../components/common/PageHero";
import FacultyGrid from "../components/faculty/FacultyGrid";



function Faculty() {
  return (
    <>
     
       <PageHero
        title="Faculty Members"
        description="Meet our experienced educators, researchers and mentors."
      />

      <FacultyGrid />
    </>
  );
}

export default Faculty;