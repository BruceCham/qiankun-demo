import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start, initGlobalState } from 'qiankun';
import './index.less';

/**
 * Step2 注册子应用
 */

registerMicroApps(
  [
    {
      name: 'html',
      entry: '//localhost:7100',
      container: '#subapp-container',
      activeRule: '/',
    },
  ],
  {
    beforeLoad: [
      app => {
        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
      },
    ],
    beforeMount: [
      app => {
        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
      },
    ],
    afterUnmount: [
      app => {
        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
      },
    ],
  },
);

const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});

onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

setGlobalState({
  ignore: 'master',
  user: {
    name: 'master',
  },
});

/**
 * Step3 设置默认进入的子应用
 */
setDefaultMountApp('/');

/**
 * Step4 启动应用
 */
start();

runAfterFirstMounted(() => {
  console.log('[MainApp] first app mounted');
});
