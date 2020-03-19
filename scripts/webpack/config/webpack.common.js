// Core
import merge from 'webpack-merge';

// Constants
import { SOURCE_DIRECTORY, BUILD_DIRECTORY } from '../constants';

// Modules
import * as modules from '../modules';

/**
 * Типы конфигов вебпак:
 * Function
 * Object
 * Promise
 */
export default () => {
    const { NODE_ENV } = process.env;
    const IS_DEVELOPMENT = NODE_ENV === 'development';

    return merge(
        {
            entry:  [ SOURCE_DIRECTORY ],
            output: {
                path:     BUILD_DIRECTORY,
                filename: IS_DEVELOPMENT
                    ? 'js/bundle.[hash].chunk.js'
                    : 'js/bundle.[chunkhash].bundle.js', // entry point bundle name
                chunkFilename:    'js/bundle.[chunkhash].chunk.js', // chunk name
                publicPath:       '/',
                hashDigestLength: 5, // длина хеша
            },
        },
        modules.defineEnvVariables(), // Позволяет создавать глобальные константы
        modules.loadJavaScript(), // обработка JS babel-loader
        modules.loadSass(), // обработка Sass css-loader
        modules.loadFonts(), // обработка шрифтов file-loader
        modules.loadImages(), // обработка картинок file-loader
        modules.loadSvg(),
        modules.connectHtml(), // Создание упрощает из HTML - файлов для обслуживания WebPack связки.
        modules.filterMomentLocales(), // Вытягиваем из библиотеки moment только нужную локаль
        modules.provideGlobals(), // Устанавливает глобальные переменые
    );
};
