# Smart Wallets Backend

This repository contains the backend code for the Smart Wallets project.

## Setup Instructions

Follow these steps to set up the project after cloning:

1. Clone the repository:
```bash
git clone https://github.com/W3-SaaS/Hedera-AI-Smart-Wallet.git
```

2. Install dependencies:
```bash
cd eliza
pnpm install
```

3. Set up environment variables:
```bash
cp eliza/.env.example eliza/.env
# Edit the .env file with your API keys and configuration
```

4. Start the agent:
```bash
cd eliza
pnpm build
pnpm start
```

## Characters

The project includes several specialized AI characters, each with unique capabilities:

### CryptoHerald (Bitcoin Price Poster)

![CryptoHerald in action](./images/cryptoherald-screenshot1.jpg)
![CryptoHerald in actionn](./images/cryptoherald-screenshot2.jpg)

This character combines the CoinMarketCap and Hedera plugins to:
- Fetch real-time Bitcoin prices using the CoinMarketCap API
- Post price updates to a specified Hedera topic (0.0.5683001)
- Respond to voice and text commands in Discord

**Key Features:**
- Seamless integration with CoinMarketCap for accurate price data
- Automatic posting to Hedera's distributed ledger for immutable price records
- Voice-enabled interactions using ElevenLabs for natural speech synthesis
- Responds to various price check commands like "What's the Bitcoin price today?" or "Check BTC price"

**Technical Integration:**
- Uses the `GET_PRICE` action to fetch cryptocurrency prices
- Uses the `HEDERA_SUBMIT_TOPIC_MESSAGE` action to post data to Hedera
- Configured with both Discord client and voice capabilities

### Hedera Token Distributor

![Token Distributor in action](./images/token-distributor-screenshot.png)

A specialized agent that securely distributes tokens to users upon verification:

**Key Features:**
- Secure token distribution requiring secret code verification
- Transfers exactly 10 tokens of a specified token ID (0.0.5678021)
- Implements a strict verification workflow before executing transfers
- Voice-enabled interactions in Discord

**Security Workflow:**
1. Prompts users for account ID and secret code
2. Verifies the secret code without ever revealing it
3. Only proceeds with transfers after successful verification
4. Uses the `TRANSFER_TOKEN` action for secure token transfers

### HederaHelper

![HederaHelper in action](./images/hederahelper-screenshot.jpg)

A comprehensive Hedera blockchain assistant:

**Key Features:**
- Provides information about Hedera services (HTS, HCS)
- Executes various Hedera-related operations
- Handles token management, topic messaging, and balance inquiries

**Supported Operations:**
- Token balance checks (`HEDERA_HTS_BALANCE`)
- HBAR balance inquiries (`HEDERA_HBAR_BALANCE`)
- Token airdrops (`HEDERA_AIRDROP_TOKEN`)
- Token association/dissociation (`HEDERA_ASSOCIATE_TOKEN`, `HEDERA_DISSOCIATE_TOKEN`)
- HCS topic management (`HEDERA_CREATE_TOPIC`, `HEDERA_DELETE_TOPIC`)
- Topic messaging (`HEDERA_SUBMIT_TOPIC_MESSAGE`, `HEDERA_GET_TOPIC_MESSAGES`)
- Token minting (`HEDERA_MINT_TOKEN`)

## Discord Integration

![Discord Bot Setup](./images/discord-setup-screenshot.PNG)

The project includes a fully integrated Discord bot that allows users to interact with all characters through both text and voice channels. The Discord integration features:

- Voice channel support for natural conversations
- Text commands for precise interactions
- ElevenLabs voice synthesis for natural-sounding responses
- OpenAI transcription for accurate voice command processing

## Environment Variables

The following environment variables are required:

- `DISCORD_API_TOKEN`: Your Discord bot token
- `DISCORD_APPLICATION_ID`: Your Discord application ID
- `COINMARKETCAP_API_KEY`: Your CoinMarketCap API key
- `HEDERA_PRIVATE_KEY`: Your Hedera account private key
- `HEDERA_ACCOUNT_ID`: Your Hedera account ID
- `HEDERA_NETWORK_TYPE`: Network type (testnet, mainnet)
- `ELEVENLABS_XI_API_KEY`: Your ElevenLabs API key for voice synthesis

See the `.env.example` file for a complete list of environment variables.

