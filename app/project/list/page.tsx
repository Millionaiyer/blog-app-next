import Link from "next/link";
import React from "react";

const ProjectList = () => {
  return (
    <ul>
      <Link href="/project/present">
        <li>Present 🏠</li>
      </Link>
      <Link href="/project/past">
        <li>Past 🐶</li>
      </Link>
      <Link href="/project/future">
        <li>Future ☎️</li>
      </Link>
    </ul>
  );
};

export default ProjectList;
