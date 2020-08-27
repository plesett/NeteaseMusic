import { defineConfig } from 'umi';

export default defineConfig({
  // ssr: {},  // 服务端渲染
  dva: {
    immer: true,
    hmr: false,
  },
  hash: true,
  request: {
    dataField: 'data'
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/', component: '@/pages/index', title: "-网易音乐-", },
        {
          path: '/playlist/', component: '@/pages/playlist', title: "-歌单-", wrappers: [
            '@/auth/index',
          ]
        }
      ],
    },
  ],
});
