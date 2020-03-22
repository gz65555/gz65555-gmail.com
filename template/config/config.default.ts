import { EggAppConfig, EggAppInfo, PowerPartial } from "egg";

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1584861654214_2425";

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`
  };

  // the return config will combines to EggAppConfig
  return {
    keys: "1584861654214_2425",
    view: {
      mapping: {
        ".html": "nunjucks"
      }
    },
    assets: {
      publicPath: "/public/",
      devServer: {
        debug: true,
        command: "umi dev",
        port: 8000,
        env: {
          APP_ROOT: process.cwd() + "/app/web",
          BROWSER: "none",
          ESLINT: "none",
          SOCKET_SERVER: "http://127.0.0.1:8000",
          PUBLIC_PATH: "http://127.0.0.1:8000"
        }
      }
    },
    ...config,
    ...bizConfig
  };
};
