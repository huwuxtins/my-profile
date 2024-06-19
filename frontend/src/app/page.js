import ProjectPreview from "~/layout/project";
import Introduce from "~/layout/introduce";
import Blogs from "~/layout/blog";
import Contact from "~/layout/contact";

export default function Home() {
  return (
    <>
      <Introduce />
      <ProjectPreview />
      <Blogs />
      <Contact/>
    </>
  );
}
