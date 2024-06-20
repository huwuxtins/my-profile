import ProjectPreview from "~/layout/project";
import Introduce from "~/layout/introduce";
import Blogs from "~/layout/blog";
import Contact from "~/layout/contact";
import Skill from "~/layout/skill";
import Experience from "~/layout/experience";

export default function Home() {
  return (
    <>
      <Introduce />
      <Skill />
      <ProjectPreview />
      <Experience />
      <Blogs />
      <Contact />
    </>
  );
}
