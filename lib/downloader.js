async function downloadImage(url, localPath) {
  download(url, localPath);
  return;
}

const cp = require("child_process");

let download = async function (uri, filename) {
  let command = `curl -s -o ${filename}  '${uri}'`;
  cp.execSync(command);
};

module.exports = downloadImage;
