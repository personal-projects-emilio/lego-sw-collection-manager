import React from 'react';
import { shallow } from 'enzyme';
import Providers from './Providers';
import RouterProvider from './RouterProvider';
import ReduxProvider from './ReduxProvider';
import MUIProvider from './MUIProvider';

describe('<Providers />', () => {
    it('should render a material ui theme provider', () => {
        const wrapper = shallow(<Providers children={<></>} />);
        expect(wrapper.find(RouterProvider)).toHaveLength(1);
        expect(wrapper.find(ReduxProvider)).toHaveLength(1);
        expect(wrapper.find(MUIProvider)).toHaveLength(1);
    });
});