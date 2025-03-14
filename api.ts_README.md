# API Documentation

This document provides detailed information about all available API endpoints in the system.

## Base URL

All endpoints are relative to the base API URL.

## Available Endpoints

### General

#### GET /
- **Description**: Welcome endpoint
- **Response**: Text message welcoming to the REST API


#### POST /agent/start
- **Description**: Create a new agent
- **Request Body**:
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
- **Response**: JSON object containing the started agent details
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

### Agent Management

#### GET /agents
- **Description**: Lists all active agents
- **Response**: JSON object containing array of agents with their details
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

#### GET /agents/:agentId
- **Description**: Get details of a specific agent
- **Parameters**:
  - `agentId`: UUID of the agent
- **Response**: JSON object containing agent details
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

#### DELETE /agents/:agentId
- **Description**: Delete/stop a specific agent
- **Parameters**:
  - `agentId`: UUID of the agent
- **Response**: 
  - Success: Status 204
  - Error: Status 404 if agent not found

### MESSAGE /:agentId/message
- **Parameters**:
  - `agentId`: UUID of the agent
  - `message` : message body
- **Request Body**:
```json
{
  "text": "User message text",
  "userId": "12dea96f-ec20-0935-a6ab-75692c994959",
  "roomId": "default-room-9c321604-e69e-0e4c-ab84-bec6fd6baf92",
  "userName": "User"
}
```  
- **Response**: 
  - Success: Status 204
  - Error: Status 404 if agent not found
- **Response Body**:
```json
  {
    "text": "Agent response text",
    "user": "system",
    "createdAt": 1719823476123
  }
```

#### POST /agents/:agentId/set
- **Description**: Create or update an agent with specific configuration
- **Parameters**:
  - `agentId`: UUID of the agent
- **Request Body**: Character configuration JSON
- **Response**: JSON object containing the created/updated agent details
```json
{
    "id": "character_id",
    "character": {
        // character configuration
    }
}
```

#### GET /agents/:agentId/:roomId/memories
- **Description**: Retrieve memories for a specific agent in a specific room
- **Parameters**:
  - `agentId`: UUID of the agent
  - `roomId`: UUID of the room
- **Response**: JSON object containing memories
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
            "unique": boolean,
            "similarity": number
        }
    ]
}
```


#### POST /agents/:agentId/stop
- **Description**: Stop a running agent
- **Parameters**:
  - `agentId`: UUID of the agent
- **Response**: 
  - Success: `{ "success": true }`
  - Error: Status 404 if agent not found

## Error Handling

All endpoints follow standard HTTP status codes:
- 200: Success
- 204: Success (No Content)
- 400: Bad Request
- 404: Not Found
- 500: Internal Server Error

Error responses include a JSON object with an error message:
```json
{
    "error": "Error description"
}
```

## Authentication

The API currently does not implement authentication. Make sure to implement appropriate authentication mechanisms before deploying to production.

## Rate Limiting

The API implements payload size limits through the `EXPRESS_MAX_PAYLOAD` environment variable (default: 100kb).
