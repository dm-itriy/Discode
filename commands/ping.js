module.exports = {
  name: "ping",
  desription: "this is a ping command",
  async execute(message, args) {
    const fetch = require("node-fetch");
    let response1 = await fetch(`http://34.68.1.129:7000/submit/${1}`, {
      method: "POST",
      body: JSON.stringify({
        src: 'print("hello")',
        lang: "python3",
        timeout: "5",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response1.json();
  },
};
