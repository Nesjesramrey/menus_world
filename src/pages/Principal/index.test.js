import React from "react";
import { shallow } from "enzyme";

import HomePage from "./index";

describe("HomePage", () => {
  it("renders without crashing", () => {
    shallow(<HomePage />);
  });
});
