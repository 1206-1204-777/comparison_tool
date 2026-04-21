# Milestone Manager

A personal milestone management tool built with Electron + TypeScript frontend and Python + FastAPI backend.

---

## Overview

Milestone Manager is a desktop application for tracking work sessions and managing tasks with status progression. All logic is processed on the backend; the frontend is responsible for display only.

---

## Features

### Time Tracking
- Start/stop work session recording
- Automatic CSV export per month (`csv/time_YYYY-MM.csv`)
- Duplicate operation prevention via flag-based validation

### Task Management
- Register up to 4 tasks per session with deadline
- Task status progression: `Unstarted(-1)` → `In Progress(0)` → `Complete(1)`
- UUID-based unique task identification
- JSONL storage per month (`YYYY-MM_goals.jsonl`)
- Update date recorded automatically on task completion

### Data Retrieval
- Retrieve all active tasks for a given month via API

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Electron + TypeScript + Vite |
| API Hub | Python + FastAPI |
| Time Tracking | times.py |
| Task Management | goals.py |
| Data Format | CSV (time) / JSONL (tasks) |

---

## Architecture

```
Frontend (Electron + TypeScript)
        ↕ HTTP (FastAPI)
    main.py  ← API Hub
    ↙       ↘
times.py   goals.py
  ↓            ↓
CSV         JSONL
```

---

## API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/timer/start` | GET | Start work session |
| `/timer/stop` | POST | Stop session and save to CSV |
| `/goals/save` | POST | Register tasks (up to 4) |
| `/goals/update` | POST | Update task status and deadline |
| `/goals/data` | GET | Retrieve tasks for specified month |

---

## Data Structure

### JSONL (Task)
```json
{
  "key": "uuid4",
  "created_at": "YYYY-MM-DD",
  "limit": "YYYY-MM-DD",
  "task": "task name",
  "status": -1,
  "updated_at": null
}
```

### CSV (Time)
```
開始日時, 終了日時, total
YYYY-MM-DD, YYYY-MM-DD, HH:MM:SS
```

---

## Design Principles

- All logic is processed in the backend; the frontend handles display only
- Frontend and backend validation are applied independently
- Each feature is modularized and integrated via `main.py`
- No AI-generated code used in any part of the implementation

---

## Planned Features

- [ ] Log output module (`logs.py`)
- [ ] Full frontend layout (sidebar / header / footer)
- [ ] Task list view with status and deadline update UI
- [ ] Neural network module for completion time prediction
- [ ] Coding assistant based on project context

---

## License

MIT
