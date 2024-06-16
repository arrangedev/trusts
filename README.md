<img src="https://i.imgur.com/UbTNpJ6.png">
<div align="center">
  <img src="https://badgen.net/badge/version/0.1.4/orange">
  <a href="https://www.npmjs.com/package/@arrangedev/trusts-sdk" target="_blank" rel="noopener noreferrer">
    <img src="https://badgen.net/badge/npm/0.1.4/orange">
  </a>
  <a href="https://solana.fm/address/arngwbKQjNF1q6s1NYURDPNQWHCQTfx5sdMQS9tB7ta/transactions" target="_blank" rel="noopener noreferrer">
    <img src="https://badgen.net/badge/program/devnet/orange">
  </a>
  <img src="https://badgen.net/badge/contributions/open/orange">
</div>
<h1 align="center">Trusts Protocol</h1>
<p align="center">Support anyone with DeFi yields.</p>
<div>
  <h3>✨ Overview</h2>
  <p>
   Trusts Protocol is an on-chain primitive for yield contributions that allows you to leverage a variety of DeFi protocols to make recurring contributions to multiple different wallets. 
   It uses Lulo Finance as proxy for protocols like MarginFi, Kamino Finance, Solend, Drift Protocol, and Mango Markets; ultimately allowing a depositor to get the best rates possible on their
   capital.
  </p>
</div>
<div>
  <h3>⁉️ Use Cases</h2>
  <ul>
    <li>Recurring & lossless contributions to projects & charities</li>
    <li>Syndicated trusts w/ primitives like Squads</li>
    <li>Lossless token presales & NFT mints</li>
    <li>Automated yield off-ramping w/ Sphere</li>
  </ul>
</div>
<h3>🛠 Getting Started</h2>
First, clone the repo:

```
git clone https://github.com/joeymeere/trusts.git
```

Run the following to generate the IDL:
```
anchor build
```

Then navigate to the ```app/trusts-ui``` directory, and run the following:
```
npm i
```

From here, you can run the last command, and you're ready to go:
```
npm run dev
```
