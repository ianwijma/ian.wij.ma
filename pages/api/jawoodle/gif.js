const textOnGif = require("text-on-gif");
const fs = require("fs");
const path = require("path");
const { Readable } = require("stream");

export default async function handler(req, res) {
  const { text = "No" } = req.query;
  const filePath = path.join("public", "jawoodle-shaking-1.gif");
  const outPath = path.join("public", "out.gif");
  console.log(filePath);
  console.log(outPath);

  await textOnGif({
    file_path: filePath,
    textMessage: text,
    write_as_file: true,
    getAsBuffer: false,
    write_path: outPath,
  });

  //   res.writeHead(200, {
  //     "Content-Type": "image/gif",
  //     "Content-Length": Buffer.byteLength(gifBuffer),
  //   });

  //   const readStream = Readable.from(gifBuffer.toString());

  //   await new Promise(function (resolve) {
  //     readStream.pipe(res);
  //     readStream.on("end", resolve);
  //   });

  res.status(200);
}
