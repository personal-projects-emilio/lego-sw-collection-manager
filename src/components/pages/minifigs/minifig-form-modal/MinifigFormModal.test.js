import React from "react";
import { shallow } from "enzyme";
import MinifigFormModal from "./MinifigFormModal";
import Inputs from "../../../commons/inputs";
import { Modal, Paper, Grid } from "@material-ui/core";

describe("<MinifigFormModal />", () => {
  it("should render a the minifig form in a modal", () => {
    const props = {
      template: {
        key1: {
          value: "",
          label: "Test minifig form modal",
          valid: false,
          touched: false
        }
      },
      updateInput: jest.fn(),
      resetMinifigForm: jest.fn(),
      classes: {}
    };
    const wrapper = shallow(<MinifigFormModal {...props} />);
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Inputs)).toHaveLength(1);
  });
});
