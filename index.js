#!/usr/bin/env node
import { Command } from "commander";
import fs from "fs"
import process from 'process';
import path from "path";
import {colorizeFile} from "./color.js";

const program = new Command();

program.
name("peek")
.description("A modern logging cli tool writtern in js")
.action(()=>{
    const logPath = path.join(process.cwd(),"./");
    const files=fs.readdirSync(logPath);
    files.forEach(file=>{
        if(!file.startsWith(".")) 
            process.stdout.write(colorizeFile(file)+" ");
    })
    console.log();
})

program
.option("-a","List all files and directories including hidden")
.action(()=>{
    const logPath = path.join(process.cwd(),"./");
    const files=fs.readdirSync(logPath);
    files.forEach(file=>{
        process.stdout.write(colorizeFile(file)+" ");
    })
    console.log();
})

program.parse();