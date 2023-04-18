import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Seo from "../components/seo";

const IndexPage = () => (
  <div>
    <StaticImage
      src="../images/example.png"
      loading="eager"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </div>
);

export const Head = () => (
  <Seo title="Home" description={undefined} children={undefined} />
);

export default IndexPage;
