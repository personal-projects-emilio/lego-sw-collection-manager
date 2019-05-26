import React from "react";
import Providers from "./providers";
import Routes from "./routes";
import AppBar from "./components/commons/app-bar";
import App from "./App";
import { mount } from "enzyme";

describe("<App />", () => {
  it("should render the appbar and routes with providers", () => {
    const props = {
      tryAutoSignup: jest.fn()
    }
    const wrapper = mount(
      <Providers>
        <App {...props} />
      </Providers>
    );
    expect(props.tryAutoSignup).toHaveBeenCalledTimes(1);
    expect(wrapper.find(AppBar)).toHaveLength(1);
    expect(wrapper.find(Routes)).toHaveLength(1);
  });
});
