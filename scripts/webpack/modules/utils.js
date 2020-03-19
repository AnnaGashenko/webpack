// Core
import {
    DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
} from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

// Constants
import { PROJECT_ROOT, BUILD_DIRECTORY, STATIC_DIRECTORY } from '../constants';

export const connectBuildProgressIndicator = () => ({
    plugins: [ new WebpackBar() ],
});

export const connectFriendlyErrors = () => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = () => ({
    plugins: [ new HotModuleReplacementPlugin() ],
});

export const cleanDirectories = () => ({
    plugins: [
        new CleanWebpackPlugin([ BUILD_DIRECTORY ], {
            verbose: true,
            root:    PROJECT_ROOT,
        }),
    ],
});

export const connectBundleAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const defineEnvVariables = () => {
    const { NODE_ENV } = process.env;

    return {
        plugins: [
            new DefinePlugin({
                __API_URI__: 'https:....',
                __ENV__:     JSON.stringify(NODE_ENV),
                __DEV__:     NODE_ENV === 'development',
                __STAGE__:   NODE_ENV === 'stage',
                __PROD__:    NODE_ENV === 'production',
            }),
        ],
    };
};

export const provideGlobals = () => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});

export const setupStaticServing = () => ({
    plugins: [
        new CopyWebpackPlugin([
            {
                from: `${STATIC_DIRECTORY}/CI/now.json`,
                to:   `${BUILD_DIRECTORY}/now.json`,
            },
        ]),
    ],
});