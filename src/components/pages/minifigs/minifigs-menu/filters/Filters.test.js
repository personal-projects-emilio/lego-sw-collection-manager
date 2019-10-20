import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';
import Inputs from "../../../../commons/inputs";

describe('<Filters />', () => {
  let props;
  beforeEach(() => {
    props = {
      showOptions: ['all', 'owned', 'missing'],
      show: 'all',
      setShow: jest.fn(),
      tagSelected: null,
      tags: [{name: 'test', amount: 2}],
      setTag: jest.fn(),
      resetTag: jest.fn(),
      characNameSelected: null,
      characNames: [{name: 'test', amount: 2}],
      setCharacName: jest.fn(),
      resetCharacName: jest.fn(),
    }
  });
  it('should render the Filters section', () => {
    const wrapper = shallow(<Filters {...props} />);
    expect(wrapper.find(Inputs)).toHaveLength(3);
    wrapper.find(Inputs).at(1).props().updateInput();
    expect(props.resetCharacName).toHaveBeenCalled();
    wrapper.find(Inputs).at(1).props().updateInput('test');
    expect(props.setCharacName).toHaveBeenCalled();
    wrapper.find(Inputs).at(2).props().updateInput();
    expect(props.resetTag).toHaveBeenCalled();
    wrapper.find(Inputs).at(2).props().updateInput('test');
    expect(props.setTag).toHaveBeenCalled();
  });
});