import {userConfig} from './userConfig.js';
//初始化用户配置
export function userInitialize() {
  global.Storage.load({key: 'userConfig'})
    .then(ret => {})
    .catch(err => {
      //若无配置，自动生成默认配置
      if (err.name === 'NotFoundError') {
        global.Storage.save({
          key: 'userConfig',
          data: userConfig,
        });
      }
    });
}

//新增事件
export function addEvent() {
  global.Storage.save({key: 'userConfig'})
    .then(ret => {})
    .catch(err => {
      //若无配置，自动生成默认配置
      if (err.name === 'NotFoundError') {
        global.Storage.save({
          key: 'userConfig',
          data: userConfig,
        });
      }
    });
}
