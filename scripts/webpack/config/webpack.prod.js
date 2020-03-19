// Core
import merge from 'webpack-merge';

// Configurations
import getCommonConfig from './webpack.common';

// Modules
import * as modules from '../modules';

export default () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'none', // NODE_ENV = 'production'
            devtool: false, // Эта опция контролирует, как генерируются исходные карты.
        },
        modules.cleanDirectories(),
        modules.connectBuildProgressIndicator(),
        modules.loadProdCss(),
        modules.optimizeBuild(),
        modules.optimizeImages(),
        modules.connectBundleAnalyzer(),
    );
};
