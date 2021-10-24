import * as readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export const firstNameQuestion = () =>
  new Promise<string>((resolve) =>
    rl.question("What is your first name?", (name) => {
      resolve(name);
    })
  );
export const lastNameQuestion = () =>
  new Promise<string>((resolve) =>
    rl.question("What is your last name?", (name) => {
      resolve(name);
    })
  );

export const emailQuestion = () =>
    new Promise<string>((resolve) =>
      rl.question("What is your email?", (name) => {
        resolve(name);
      })
    );

export const passwordQuestion = () =>
  new Promise<string>((resolve) =>
    rl.question("What is your password?", (name) => {
      resolve(name);
    })
  );

export const cityQuestion = () =>
  new Promise<string>((resolve) =>
    rl.question("What is your city?", (name) => {
      resolve(name);
    })
  );

export const stateQuestion = () =>
  new Promise<string>((resolve) =>
    rl.question("What is your state?", (name) => {
      resolve(name);
    })
  );

export const countryQuestion = () =>
  new Promise<string>((resolve) =>
    rl.question("What is your country?", (name) => {
      resolve(name);
    })
  );

rl.on("close", () => console.log("Nice to have you"));
rl.on("error", (err) => console.error("error is", err));
