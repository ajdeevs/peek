#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs";
import path from "path";
import { colorizeFile } from "./config/color.js";

const program = new Command();

program
  .name("peek")
  .description("A modern logging CLI tool written in JS")
  .option("-a, --all", "List all files including hidden")
  .action((options) => {
    const logPath = process.cwd();
    const files = fs.readdirSync(logPath);
    console.log(options)
    files.forEach((file) => {
      if (!options.all && file.startsWith(".")) return;
      process.stdout.write(colorizeFile(file) + " ");
    });

    console.log();
  });

program.parse();
