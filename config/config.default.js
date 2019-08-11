/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565484115302_1213';

  // add your middleware config here
  config.middleware = ['robot'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks'
    }
  };

  // robot's configurations
  config.robot = {
    ua: [/Baiduspider/i]
  };

  return {
    ...config,
    ...userConfig
  };
};
