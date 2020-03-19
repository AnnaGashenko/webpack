// Core
import React from 'react';
import Loadable from 'react-loadable';

// Components
import { Loading } from '../Loading';

const LoadableComponent = Loadable({
    loader:  () => import(/* webpackChunkName: "jellyfish" */ './Component'),
    loading: Loading,
    delay:   1000,
});

export const Jellyfish = () => {
    return <LoadableComponent />;
};
