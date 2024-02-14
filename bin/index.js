#!/usr/bin/env node

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import init from "./commands/init/index.js";
import list from "./commands/list/index.js";
import constants from "./static/constants.js";
import create from "./commands/create/index.js";

yargs(hideBin(process.argv))
  .scriptName(constants.SCRIPT_NAME)
  .usage(constants.CLI_USAGE)
  .command(init.command, init.description, init.builder, init.handler)
  .command(list.command, list.description, list.builder, list.handler)
  .command(create.command, create.description, create.builder, create.handler)
  .help(true).argv;
