## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy on Arweave using Bundlr Network

- Get 0.02 AR from the [Arweave Faucet](https://faucet.arweave.net/)

- Save your wallet keys

- Install Bundlr

> npm install -g @bundlr-network/client

- Fund Bundlr with 0.01 AR

> bundlr fund 10000000000 -h https://node1.bundlr.network -w wallet-keys.json -c arweave 

- Ask your Bundlr balance

> bundlr balance wallet-address -h https://node1.bundlr.network -c arweave  

- Deploy

> bundlr upload-dir ./out -c arweave -h https://node1.bundlr.network -w wallet-keys.json --index-file index.html

