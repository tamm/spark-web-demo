import { Fragment } from "react";

import { createIcon } from "@spark-web/icon";

// I tried to copy this from the figma and the icon turned out very odd due to a double outline
// (two concentric circles with stroke which overlaps) therefor this is just a basic circle which will get a single strike outline
export const EmptyCircleIcon = createIcon(
  <Fragment>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9" />
    </svg>
  </Fragment>,
  "EmptyCircleIcon"
);
