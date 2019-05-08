import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../stores';

export const routerProvider = (props) => {
    return <ConnectedRouter history={history} children={props.children} />
}

export default routerProvider;