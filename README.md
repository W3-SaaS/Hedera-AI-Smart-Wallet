# w3SaaS Smart Wallet - Hedera Agent

<div align="center">
  
![Hedera](https://img.shields.io/badge/Powered%20by-Hedera-3ECF8E?style=for-the-badge&logo=hedera&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-Integration-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![ElizaOS](https://img.shields.io/badge/Built%20with-ElizaOS-blue?style=for-the-badge)

</div>

A powerful AI agent platform built on Hedera's distributed ledger technology, enabling intelligent blockchain interactions through natural language processing.

## 📚 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [AI Agents](#ai-agents)
- [Discord Integration](#discord-integration)
- [Configuration](#configuration)
- [API Documentation](#api-documentation)

## 🌟 Overview

The w3SaaS Smart Wallet Hedera Agent provides an intelligent layer on top of blockchain technology, allowing users to interact with Hedera services through intuitive AI-powered interfaces. Built on ElizaOS, it combines conversational AI with secure blockchain operations.

## ✨ Features

- **Natural Language Blockchain Interactions** - Execute complex Hedera operations with simple text or voice commands
- **Multi-channel Support** - Interact via Discord text channels, voice chat, or direct API calls
- **Voice Synthesis** - Natural-sounding responses using ElevenLabs integration
- **Secure Token Management** - Verify and execute token transfers with robust security protocols
- **Real-time Data Integration** - Access live cryptocurrency prices and market data

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/W3-SaaS/Hedera-AI-Smart-Wallet.git

# Install dependencies
cd eliza
pnpm install

# Configure environment
cp .env.example .env
# Edit .env with your API keys and configuration

# Build and launch
pnpm build
pnpm start
```

## 🤖 AI Agents

### CryptoHerald

<div align="center">
  <img src="./images/cryptoherald-screenshot1.jpg" alt="CryptoHerald in action" width="45%">
  <img src="./images/cryptoherald-screenshot2.jpg" alt="CryptoHerald in action" width="45%">
</div>

The CryptoHerald agent combines CoinMarketCap and Hedera plugins to deliver real-time cryptocurrency price updates:

- Fetches live Bitcoin prices via CoinMarketCap API
- Records price data immutably on Hedera's distributed ledger
- Responds to diverse price check commands in text and voice
- Publishes updates to dedicated Hedera topics

### Hedera Token Distributor

<div align="center">
  <img src="./images/token-distributor-screenshot.png" alt="Token Distributor in action" width="70%">
</div>

A specialized agent handling secure token distribution with a rigorous verification workflow:

- Verifies user identity through secure code validation
- Manages precise token transfers (10 tokens per verified request)
- Implements multi-step security protocols before execution
- Provides voice-enabled verification and confirmation

### HederaHelper

<div align="center">
  <img src="./images/hederahelper-screenshot.jpg" alt="HederaHelper in action" width="70%">
</div>

A comprehensive Hedera operations assistant supporting:

- Token management (balances, minting, association)
- HBAR balance inquiries
- Hedera Consensus Service (HCS) topic creation and messaging
- Detailed information about Hedera services and capabilities

## 🎮 Discord Integration

<div align="center">
  <img src="./images/discord-setup-screenshot.PNG" alt="Discord Bot Setup" width="70%">
</div>

Seamlessly interact with all agents through a fully integrated Discord bot:

- Natural voice conversations in Discord voice channels
- Precise text command support
- High-quality voice synthesis via ElevenLabs
- Accurate voice command recognition with OpenAI transcription

## ⚙️ Configuration

Required environment variables:

```
DISCORD_API_TOKEN=your-discord-bot-token
DISCORD_APPLICATION_ID=your-discord-application-id
COINMARKETCAP_API_KEY=your-coinmarketcap-api-key
HEDERA_PRIVATE_KEY=your-hedera-account-private-key
HEDERA_ACCOUNT_ID=your-hedera-account-id
HEDERA_NETWORK_TYPE=testnet-or-mainnet
ELEVENLABS_XI_API_KEY=your-elevenlabs-api-key
```

See `.env.example` for a complete list of configuration options.

## 📘 API Documentation

The platform exposes a comprehensive REST API for programmatic access to all agent capabilities:

- Agent creation and management
- Message handling and processing
- Memory and context management
- Storage operations

For detailed API specifications including endpoints, request/response formats, and examples, see the [API Documentation](api.ts_README.md).

---

<div align="center">
  <p>Built with ❤️ by the W3-SaaS team</p>
  <p>Powered by <a href="https://elizaos.github.io/eliza/docs/intro/">ElizaOS</a> and <a href="https://hedera.com/">Hedera</a></p>
</div>

