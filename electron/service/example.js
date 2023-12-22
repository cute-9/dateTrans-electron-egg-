"use strict";

const { Service } = require("ee-core");
const Electron = require("ee-core/electron");
const { dialog } = require("electron");
/**
 * 示例服务（service层为单例）
 * @class
 */
class ExampleService extends Service {
  constructor(ctx) {
    super(ctx);
  }

  /**
   * test
   */
  // async test(args) {
  //   let obj = {
  //     status:'ok',
  //     params: args
  //   }

  //   return obj;
  // }
  async dialog(args) {
    const result = dialog.showOpenDialog({
      properties: [args.fileName],
    });
    return result;
  }
}

ExampleService.toString = () => "[class ExampleService]";
module.exports = ExampleService;
