import * as path from 'path';
import { generateBundles } from './index';

generateBundles([{
  name: 'dts-builder',
  sourceDir: path.resolve(__dirname, '../dist'),
  destDir: path.resolve(__dirname, '..')
}]);
