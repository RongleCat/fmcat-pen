import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import px2vw from 'postcss-px-to-viewport';

const convertPageList = ['lottery'];
const px2vwReg = new RegExp(`^((?!${convertPageList.join('|')}).)*$`);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        px2vw({
          viewportWidth: 750, // 视窗的宽度，对应我们设计稿的宽度，一般指retina（一个点两个像素），宽度750
          unitPrecision: 5, // 指定`px`转化成视窗单位值的小数位数（很多时候不能整除）
          viewportUnit: 'vw', // 指定需要转换的视窗单位 建议'vw'
          selectorBlackList: ['ignore'], // 指定不需要转换的类
          // exclude: [px2vwReg], // 指定不要转换的文件，数组内应该是正则表达式
          exclude: [px2vwReg], // 指定不要转换的文件，数组内应该是正则表达式
          minPixelValue: 1, // 小于或者等于1px不转换为视窗单位
          mediaQuery: true, // 允许在媒体查询中转换'px'
          landscape: false, // 是否添加根据landscapeWidth生成的媒体查询条件 @media (orientation: landscape)
          landscapeUnit: 'vw', // 横屏时使用的视窗单位
          landscapeWidth: 1134, // 横屏时使用的视窗宽度
        }),
      ],
    },
  },
});
