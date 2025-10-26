const FILE_TYPE_MAP = {
  // 📄 Documents
  txt: 'docs', log: 'docs', md: 'docs', rtf: 'docs',
  doc: 'docs', docx: 'docs', odt: 'docs',
  xls: 'docs', xlsx: 'docs', csv: 'docs', tsv: 'docs',
  ppt: 'docs', pptx: 'docs', pdf: 'docs',

  // 💻 Code / Source
  c: 'code', cpp: 'code', h: 'code', hpp: 'code',
  js: 'code', mjs: 'code', cjs: 'code', ts: 'code', jsx: 'code', tsx: 'code',
  py: 'code', rb: 'code', php: 'code', java: 'code', go: 'code',
  rs: 'code', swift: 'code', kt: 'code', kts: 'code', lua: 'code',
  sh: 'code', bash: 'code', zsh: 'code', fish: 'code',
  pl: 'code', r: 'code', dart: 'code', scala: 'code',

  // 🧩 Data / Config
  json: 'data', json5: 'data', yaml: 'data', yml: 'data',
  xml: 'data', toml: 'data', ini: 'data', conf: 'data',
  env: 'data', cfg: 'data',

  // 🎨 Images
  jpg: 'image', jpeg: 'image', png: 'image', gif: 'image',
  bmp: 'image', tiff: 'image', webp: 'image', svg: 'image', ico: 'image',
  avif: 'image', heic: 'image',

  // 🎧 Audio
  mp3: 'audio', wav: 'audio', flac: 'audio', ogg: 'audio', m4a: 'audio',
  opus: 'audio', mid: 'audio', midi: 'audio', aiff: 'audio',

  // 🎬 Video
  mp4: 'video', mkv: 'video', avi: 'video', mov: 'video',
  webm: 'video', flv: 'video', m4v: 'video', ts: 'video',
  "3gp": 'video', mpeg: 'video', mpg: 'video',

  // 📦 Archives / Compressed
  zip: 'archive', rar: 'archive', "7z": 'archive',
  tar: 'archive', gz: 'archive', bz2: 'archive',
  xz: 'archive', tgz: 'archive', zst: 'archive',

  // 💽 Disk Images / Packages
  iso: 'package', img: 'package', deb: 'package',
  rpm: 'package', apk: 'package', dmg: 'package', pkg: 'package',

  // 🗄️ Databases
  db: 'db', sqlite: 'db', sql: 'db', mdb: 'db', accdb: 'db',

  // 🔤 Fonts
  ttf: 'font', otf: 'font', woff: 'font', woff2: 'font',

  // ⚙️ Executables
  exe: 'exec', bin: 'exec', run: 'exec', appimage: 'exec',
  out: 'exec', cmd: 'exec', bat: 'exec',

  // 🧰 System / Misc
  lock: 'system', bak: 'system', tmp: 'system', swap: 'system',
};

export function getCategory(fileName) {
  const ext = fileName.split('.').pop().toLowerCase();
  return FILE_TYPE_MAP[ext] || 'other';
}
