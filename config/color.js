import chalk from "chalk";
import { getCategory } from "./config.js";

const COLOR_MAP = {
  // 📁 Core Types
  dir: chalk.blue.bold,
  symlink: chalk.cyan,
  exec: chalk.greenBright,

  // 📄 Documents
  docs: chalk.white,

  // 💻 Code
  code: chalk.cyan,

  // 🧩 Data / Config
  data: chalk.yellow,

  // 🎨 Images
  image: chalk.magentaBright,

  // 🎧 Audio
  audio: chalk.blueBright,

  // 🎬 Video
  video: chalk.green,

  // 📦 Archives / Compressed
  archive: chalk.red,

  // 💽 Disk Images / Packages
  package: chalk.redBright,

  // 🗄️ Databases
  db: chalk.yellowBright,

  // 🔤 Fonts
  font: chalk.magenta,

  // ⚙️ System / Hidden / Misc
  system: chalk.gray.dim,
  hidden: chalk.gray,
  other: chalk.white.dim,
};

export function colorizeFile(fileName) {
  const category = getCategory(fileName);
  const colorFn = COLOR_MAP[category] || COLOR_MAP.other;
  return colorFn(fileName);
}
