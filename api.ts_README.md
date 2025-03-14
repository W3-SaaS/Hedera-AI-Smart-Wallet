# 🌐 w3SaaS Smart Wallet - Hedera Agent API

<div align="center">
  <img src="https://img.shields.io/badge/Hedera-Agent%20API-3ECF8E?style=for-the-badge&logo=hedera&logoColor=white" alt="Hedera API" width="300"/>
  <br/>
  
![API Version](https://img.shields.io/badge/API%20Version-1.0-blue?style=for-the-badge)
![Documentation](https://img.shields.io/badge/Documentation-Complete-success?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-3ECF8E?style=for-the-badge)

</div>

## 📑 Table of Contents

- [Introduction](#introduction)
- [Authentication](#authentication)
- [Base URL](#base-url)
- [Response Codes](#response-codes)
- [Rate Limiting](#rate-limiting)
- [Endpoints](#endpoints)
  - [General](#general)
  - [Agent Management](#agent-management)
  - [Messaging](#messaging)
  - [Memory Management](#memory-management)
- [Examples](#examples)
- [Error Handling](#error-handling)

## 📌 Introduction

The w3SaaS Smart Wallet Hedera Agent API provides programmatic access to all agent capabilities, including creation, management, messaging, and memory operations. This REST API enables developers to integrate intelligent blockchain interactions into their applications.

## 🔐 Authentication

> ⚠️ **Important**: The API currently does not implement authentication. Make sure to implement appropriate authentication mechanisms before deploying to production.

## 🌐 Base URL

All API endpoints are relative to the base API URL.

```
https://api.w3saas.io/v1
```

## 📊 Response Codes

| Code | Description |
|------|-------------|
| 200  | ✅ Success     |
| 204  | ✅ Success (No Content) |
| 400  | ❌ Bad Request |
| 404  | ❌ Not Found   |
| 500  | ❌ Internal Server Error |

## ⚙️ Rate Limiting

The API implements payload size limits through the `EXPRESS_MAX_PAYLOAD` environment variable (default: 100kb).

## 🔗 Endpoints

### 🔍 General

#### Welcome Endpoint
```http
GET /
```

Returns a welcome message confirming access to the REST API.

**Response**:
```
Welcome to the w3SaaS Smart Wallet Hedera Agent API
```

---

#### Create New Agent
```http
POST /agent/start
```

Creates and initializes a new agent with the provided configuration.

**Request Body**:
```json
{
  "characterJson": {
    "name": "AgentName",
    "username": "agent_username",
    "system": "Agent system prompt",
    "bio": ["Agent biography"],
    "lore": ["Agent background information"],
    "modelProvider": "google",
    "settings": {
      "voice": {
        "model": "eleven_multilingual_v2"
      }
    }
  }
}
```

**Response** (200 OK):
```json
{
  "id": "9c321604-e69e-0e4c-ab84-bec6fd6baf92",
  "character": {
    "id": "9c321604-e69e-0e4c-ab84-bec6fd6baf92",
    "name": "AgentName",
    "username": "agent_username",
    "system": "Agent system prompt",
    "bio": ["Agent biography"],
    "lore": ["Agent background information"],
    "modelProvider": "google",
    "settings": {
      "voice": {
        "model": "eleven_multilingual_v2"
      }
    }
  }
}
```

---

### 🤖 Agent Management

#### List All Agents
```http
GET /agents
```

Retrieves a list of all active agents in the system.

**Response** (200 OK):
```json
{
  "agents": [
    {
      "id": "9c321604-e69e-0e4c-ab84-bec6fd6baf92",
      "name": "AgentName",
      "clients": ["direct"]
    }
  ]
}
```

---

#### Get Agent Details
```http
GET /agents/:agentId
```

Retrieves detailed information about a specific agent.

**Parameters**:
- `agentId` (path) - UUID of the agent

**Response** (200 OK):
```json
{
  "id": "9c321604-e69e-0e4c-ab84-bec6fd6baf92",
  "character": {
    "id": "9c321604-e69e-0e4c-ab84-bec6fd6baf92",
    "name": "AgentName",
    "username": "agent_username",
    "bio": ["Agent biography"],
    "lore": ["Agent lore"],
    "modelProvider": "google",
    "settings": {
      "voice": {
        "model": "eleven_multilingual_v2"
      }
    }
  }
}
```

---

#### Delete Agent
```http
DELETE /agents/:agentId
```

Deletes/stops a specific agent.

**Parameters**:
- `agentId` (path) - UUID of the agent

**Response**:
- ✅ Success: 204 No Content
- ❌ Error: 404 Not Found if agent doesn't exist

---

#### Configure Agent
```http
POST /agents/:agentId/set
```

Creates or updates an agent with a specific configuration.

**Parameters**:
- `agentId` (path) - UUID of the agent

**Request Body**: Character configuration JSON

**Response** (200 OK):
```json
{
  "id": "character_id",
  "character": {
    // character configuration
  }
}
```

---

#### Stop Agent
```http
POST /agents/:agentId/stop
```

Stops a running agent.

**Parameters**:
- `agentId` (path) - UUID of the agent

**Response** (200 OK):
```json
{
  "success": true
}
```

**Error Response** (404 Not Found):
```json
{
  "error": "Agent not found"
}
```

---

### 💬 Messaging

#### Send Message to Agent
```http
POST /:agentId/message
```

Sends a message to a specific agent.

**Parameters**:
- `agentId` (path) - UUID of the agent

**Request Body**:
```json
{
  "text": "User message text",
  "userId": "12dea96f-ec20-0935-a6ab-75692c994959",
  "roomId": "default-room-9c321604-e69e-0e4c-ab84-bec6fd6baf92",
  "userName": "User"
}
```

**Response** (200 OK):
```json
{
  "text": "Agent response text",
  "user": "system",
  "createdAt": 1719823476123
}
```

---

### 🧠 Memory Management

#### Get Agent Memories
```http
GET /agents/:agentId/:roomId/memories
```

Retrieves memories for a specific agent in a specific room.

**Parameters**:
- `agentId` (path) - UUID of the agent
- `roomId` (path) - UUID of the room

**Response** (200 OK):
```json
{
  "agentId": "uuid",
  "roomId": "uuid",
  "memories": [
    {
      "id": "memory_id",
      "userId": "user_id",
      "agentId": "agent_id",
      "createdAt": "timestamp",
      "content": {
        "text": "memory_text",
        "action": "action",
        "source": "source",
        "url": "url",
        "inReplyTo": "reply_reference",
        "attachments": [
          {
            "id": "attachment_id",
            "url": "url",
            "title": "title",
            "source": "source",
            "description": "description",
            "text": "text",
            "contentType": "content_type"
          }
        ]
      },
      "embedding": "embedding_data",
      "roomId": "room_id",
      "unique": true,
      "similarity": 0.95
    }
  ]
}
```

---

## 📝 Examples

### Creating a New Agent

```javascript
fetch('https://api.w3saas.io/v1/agent/start', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    characterJson: {
      name: "CryptoHerald",
      username: "crypto_herald",
      system: "You are CryptoHerald, an AI assistant specialized in cryptocurrency price tracking.",
      bio: ["Expert in cryptocurrency market analysis"],
      lore: ["Created to help users track Bitcoin prices on Hedera"],
      modelProvider: "google",
      settings: {
        voice: {
          model: "eleven_multilingual_v2"
        }
      }
    }
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

### Sending a Message

```javascript
fetch('https://api.w3saas.io/v1/9c321604-e69e-0e4c-ab84-bec6fd6baf92/message', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    text: "What's the current Bitcoin price?",
    userId: "12dea96f-ec20-0935-a6ab-75692c994959",
    roomId: "default-room-9c321604-e69e-0e4c-ab84-bec6fd6baf92",
    userName: "Alice"
  })
})
.then(response => response.json())
.then(data => console.log(data));
```

## ❌ Error Handling

All error responses follow a consistent format:

```json
{
  "error": "Error description"
}
```

Example error scenarios:
- 🚫 Agent not found: 404 Not Found
- 🚫 Invalid payload: 400 Bad Request
- 🚫 Server error: 500 Internal Server Error

<div align="center">
  <br/>
  <img src="https://img.shields.io/badge/W3%20SaaS-Technologies-black?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMSAxNy45M2MtMy45NS0uNDktNy0zLjg1LTctNy45MyAwLS42Mi4wOC0xLjIxLjIxLTEuNzlMOSAxNXY3LjkzMnptNi45LTJoLTEuMzk2VjhINy4wODdWNi4yOTNjMC0uMzU2LjI4NS0uNjI1LjY0My0uNjI1aDE2LjM1MmMuMzU4IDAgLjY0My4yNy42NDMuNjI1VjE3YzAgLjM1Ni0uMjg1LjYyNS0uNjQzLjYyNWgtMS4xMDV2LTQuMzc1aC0yLjA0NlYxOHptLjQtOGgtMi4zOTZ2LTJIMTcuOXYyeiIvPjwvc3ZnPg==" alt="W3 SaaS Technologies" width="300"/>
  
  ## 📞 Need Support?

  <a href="https://www.linkedin.com/company/w3-saas-technologies/posts/?feedView=all" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-Contact%20Us-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Contact"/></a>
  <a href="https://github.com/W3-SaaS/Hedera-AI-Smart-Wallet/blob/main/README.md" target="_blank"><img src="https://img.shields.io/badge/GitHub-Documentation-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Docs"/></a>

  <p>Built with ❤️ by the W3-SaaS team</p>
</div>
