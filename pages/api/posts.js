import * as fs from "fs";

export default function handler(req, res) {
  fs.readdir("posts", (err, data) => {
    console.log(data);
    res.status(200).json(data);
  });
}
