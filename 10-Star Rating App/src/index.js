import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import StarRating from "./StarRating";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StarRating maxRating={10} />
    <StarRating
      maxRating={5}
      size={36}
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
      defaultRating={3}
    />
  </StrictMode>
);
