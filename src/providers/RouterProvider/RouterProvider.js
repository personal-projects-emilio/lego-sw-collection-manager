import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../../store';

export const routerProvider = (props) => {
    return <ConnectedRouter history={history} children={props.children} />
}

export default routerProvider;