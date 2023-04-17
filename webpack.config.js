import webpack from 'webpack';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    plugins: [
        new webpack.ProvidePlugin(
            {
                process: 'process/browser.js',
            }
        ),
    ],
    devtool: 'cheap-module-source-map',
    entry: '/src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    }
};