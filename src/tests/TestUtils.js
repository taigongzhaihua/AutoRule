<<<<<<< HEAD
const fs = require("fs");
const path = require("path");

const crypto = require("crypto");
function calculateMD5(input) {
  const hash = crypto.createHash("md5");
  hash.update(input);
  return hash.digest("hex");
=======
const fs = require('fs');
const path = require('path');

const crypto = require('crypto');
function calculateMD5(input) {
  const hash = crypto.createHash('md5');
  hash.update(input);
  return hash.digest('hex');
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
}

/**
 * 读取测试文件内容
 * @param name
 * @returns {string}
 */
function getTestFile(name) {
<<<<<<< HEAD
  const dataFilePath = path.join(dirname, "tests", `${name}.txt`);
  return fs.readFileSync(dataFilePath, "utf8");
=======
  const dataFilePath = path.join(dirname, 'tests', `${name}.txt`);
  return fs.readFileSync(dataFilePath, 'utf8');
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
}

let get = null;
let dirname = null;
<<<<<<< HEAD
let type = null;
let app = null;

export function testAnkioInit(getFn, pathUrl, appType, packageName) {
  get = getFn;
  dirname = pathUrl;
  type = appType;
=======
let app = null;

export function testAnkioInit(getFn, pathUrl, packageName) {
  get = getFn;
  dirname = pathUrl;
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
  app = packageName;
}

export function testAnkio(name, results) {
  var datas = [];
  for (let i = 0; i < results.length; i++) {
    let filename = `${name}`;
    if (i > 0) {
      filename += i + 1;
    }
    const data = getTestFile(filename);
    datas.push(data);
    const result = results[i];
    const resultData = get(data);
    expect(result).toEqual(resultData);
  }
  var testObject = {
<<<<<<< HEAD
    name: name,
    results: results,
    datas: datas,
    type: type,
    app: app,
  };
  //判断dist文件夹是否不存在，不存在就创建
  const dist = path.join(__dirname, "..", "..", "dist");
=======
    "name": name,
    "results": results,
    "datas": datas,
    "app": app
  };
  //判断dist文件夹是否不存在，不存在就创建
  const dist = path.join(__dirname, '..', '..', 'tests');
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
  if (!fs.existsSync(dist)) {
    fs.mkdirSync(dist);
  }
  //写入到dist文件中，取name的md5
  fs.writeFileSync(
    path.join(dist, `${calculateMD5(name)}.json`),
<<<<<<< HEAD
    JSON.stringify(testObject, null, 2),
=======
    JSON.stringify(testObject, null, 2)
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
  );
}
