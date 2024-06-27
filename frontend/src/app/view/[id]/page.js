import Blogs from "~/layout/blog";
import Contact from "~/layout/contact";
import Experience from "~/layout/experience";
import Introduce from "~/layout/introduce";
import ProjectPreview from "~/layout/project";
import Skill from "~/layout/skill";

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
