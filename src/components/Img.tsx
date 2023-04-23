import React from "react";
import { StaticImage } from "gatsby-plugin-image";

type Props = {
  imgUrl: string;
};

const IndexPage: React.FC<Props> = ({ imgUrl }) => (
  <div>
    <StaticImage
      src=""
      loading="eager"
      width={64}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </div>
);

export default IndexPage;
