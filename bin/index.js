#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { scriptName, usage } from "./static/constants.js";
import { initCommand, listCommand } from "./static/commands.js";

yargs(hideBin(process.argv))
  .scriptName(scriptName)
  .usage(usage)
  .command(
    initCommand.command,
    initCommand.description,
    initCommand.builder,
    initCommand.handler
  )
  .command(
    listCommand.command,
    listCommand.description,
    listCommand.builder,
    listCommand.handler
  )
  .help(true).argv;
