import React from 'react';
import { shallow } from 'enzyme';
import MUIProvider from './MUIProvider';
import { MuiThemeProvider } from '@material-ui/core/styles';

describe('<MUIProvider />', () => {
    it('should render a material ui theme provider', () => {
        const wrapper = shallow(<MUIProvider children={<></>} />);
        expect(wrapper.find(MuiThemeProvider)).toHaveLength(1);
    });
});