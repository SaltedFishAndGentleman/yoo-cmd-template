#!/user/bin/env node
const fs = require('fs');
const path = require('path');
const utils = require('./utils');

const { cmd, rootDir, pkgConfig } = utils;

/**
 * 需要支持的特性：

 *
 * 1.支持添加/删除脚本仓库地址（保持相同格式才支持解析）
 * （默认使用官方（自己）的仓库）
 *
 * testCmd  repo  add / rm [ url ]
 *
 * 2.支持查看脚本仓库地址（保持相同格式才支持解析）
 *
 * testCmd repo  ls
 *
 * 3.支持查看所有脚本仓库整合后形成的脚本列表
 *
 * testCmd script ls
 *
 * 4.支持删除所有脚本仓库整合后形成的脚本列表
 
 */
cmd.version(pkgConfig.version,);

/**
 * 载入命令
 */
try {
  const fileList = fs.readdir(rootDir);

  fileList.forEach(fileName => {
    const filePath = path.join(rootDir, fileName);
    require.resolve(filePath);
  });
} catch (e) {
  console.error(e);
}
