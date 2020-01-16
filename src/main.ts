import * as core from "@actions/core";
import {webhook} from "./discord";

async function run(): Promise<void> {
  try {
    const webhookURL: string = core.getInput("webhook-url");
    const title: string | undefined = core.getInput("title");
    const message: string | undefined = core.getInput("message");
    const url: string | undefined = core.getInput("url");
    const color: string | number | undefined = core.getInput("color");

    const response = await webhook(webhookURL, {title, message, url, color});
    core.debug(JSON.stringify(response, null, 2));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
