#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import path from "path";
import { colorizeFile } from "./config/color.js";

const program = new Command();
const termWidth = process.stdout.columns || 80; 

program
  .name("peek")
  .description("A modern logging CLI tool written in JS")
  .option("-a, --all", "List all files including hidden")
  .action((options) => {
    const logPath = process.cwd();
    const allFiles = fs.readdirSync(logPath);
    const visibleFiles = allFiles.filter(file => options.all || !file.startsWith("."));
    const { cols, rows, colWidth } = getColumnLayout(visibleFiles);

    let ind=0;
    for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
        if(ind>=visibleFiles.length){
          console.log();
          return;
        } 
        process.stdout.write(colorizeFile(visibleFiles[ind].padEnd(colWidth," ")));
        ind++;
      }
      console.log();
    }
  });

program.parse();

function getColumnLayout(files) {
  const padding = 2; 
  const longest = Math.max(...files.map(f => f.length));
  const colWidth = longest + padding;

  const cols = Math.floor(termWidth / colWidth) || 1; // avoid 0
  const rows = Math.ceil(files.length / cols);

  return { cols, rows, colWidth };
}
