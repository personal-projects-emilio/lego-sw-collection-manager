import React from 'react';
import { shallow } from 'enzyme';
import RouterProvider from './RouterProvider';
import { ConnectedRouter } from 'connected-react-router';

describe('<RouterProvider />', () => {
    it('should render a router provider', () => {
        const wrapper = shallow(<RouterProvider children={<></>} />);
        expect(wrapper.find(ConnectedRouter)).toHaveLength(1);
    });
});