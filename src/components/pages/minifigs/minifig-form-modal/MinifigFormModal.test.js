import React from "react";
import { shallow, mount } from "enzyme";
import MinifigFormModal from "./MinifigFormModal";
import Inputs from "../../../commons/inputs";
import { Modal, Paper, Grid, Button } from "@material-ui/core";

describe("<MinifigFormModal />", () => {
  let props;
  beforeEach(() => {
    props = {
      template: {
        reference: {
          type: "textfield",
          value: "sw0001",
          label: "Test minifig form modal",
          valid: true,
          touched: false,
          validation: {
            reference: "sw0001"
          }
        }
      },
      updateInput: jest.fn(),
      resetMinifigForm: jest.fn(),
      submitMinifigForm:jest.fn(),
      formIsValid: true,
      classes: {}
    };
  })
  it("should render an edit form in a modal", () => {
    const wrapper = shallow(<MinifigFormModal {...props} />);
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Inputs)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    wrapper.find(Button).at(0).simulate('click');
    expect(props.submitMinifigForm).toHaveBeenCalled();
    expect(wrapper.find(Button).at(0).prop("children")).toBe('Edit sw0001');
  });
  it("should render an add form in a modal", () => {
    props.template.reference.validation.reference = null;
    const wrapper = shallow(<MinifigFormModal {...props} />);
    expect(wrapper.find(Modal)).toHaveLength(1);
    expect(wrapper.find(Paper)).toHaveLength(1);
    expect(wrapper.find(Grid)).toHaveLength(1);
    expect(wrapper.find(Inputs)).toHaveLength(1);
    expect(wrapper.find(Button)).toHaveLength(1);
    expect(wrapper.find(Button).at(0).prop("children")).toBe('Add a minifig');
  });
  it("should update an input field", () => {
    const wrapper = mount(<MinifigFormModal {...props} />);
    wrapper.find("input").first().simulate("change", { target: { value: "test" } });
    expect(props.updateInput).toHaveBeenCalledWith("test", "reference");
  });
});
