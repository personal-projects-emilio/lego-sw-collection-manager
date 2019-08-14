import React from "react";
import { shallow, mount } from "enzyme";
import Auth from "./Auth";
import { Paper, Grid, Button } from "@material-ui/core";
import Inputs from "../../commons/inputs";

describe("<Auth />", () => {
  let props;
  beforeEach(() => {
    props = {
      classes: {},
      template: {
        email: {
          type: "textfield",
          value: "",
          label: "Email",
          valid: false,
          touched: false
        },
        password: {
          type: "textfield",
          value: "",
          label: "Password",
          valid: false,
          touched: false
        }
      },
      updateInput: jest.fn(),
      authenticate: jest.fn(),
      formIsValid: false
    };
  });
  it("should render the auh page", () => {
    const wrapper = shallow(<Auth {...props} />);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Inputs)).toHaveLength(2);
  });
  it("should update an auth input field", () => {
    const wrapper = mount(<Auth {...props} />);
    wrapper.find("input").first().simulate("change", { target: { value: "test" } });
    expect(props.updateInput).toHaveBeenCalledWith("test", "email");
  });
});
