# Milestone Manager

A personal milestone management tool built with Electron + TypeScript frontend and Python + FastAPI backend.  
Designed as a prototype and demonstration tool for a future Rust-based computation engine.

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
| Layout | CSS Grid (responsive) |
| Component Design | TypeScript class-based components |
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

### Frontend Component Structure

```
App (main.ts)
├── Header        (components.ts)
├── Sidebar       (components.ts)
├── MainArea
│   ├── TimerComponent    (timer.ts)   ← in progress
│   └── GoalsComponent    (goals.ts)   ← planned
├── GraphArea     (components.ts)
└── Footer        (components.ts)
```

---

## Screen Layout

```
+--------------------------------------------------+
|  Header  (current function name)                 |
+--------+-----------------------+----------------+
|        |                       |                |
| Side   |   Main Area           |  Graph Area    |
| bar    |   (function view)     |  (NN: planned) |
|        |                       |                |
+--------+-----------------------+----------------+
|  Footer  (log output)                            |
+--------------------------------------------------+
```

| Area | Width | Height |
|---|---|---|
| Sidebar | 85fr | full height |
| Main Area | 732fr | 668fr |
| Graph Area | 283fr | 668fr |
| Header | full width | 38fr |
| Footer | full width | 94fr |

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
- TypeScript components are defined as classes for explicit lifecycle control
- No AI-generated code used in any part of the implementation

---

## Implementation Status

| Component | Status |
|---|---|
| Global CSS layout (CSS Grid) | ✅ Complete |
| Header / Sidebar / GraphArea / Footer | ✅ Complete |
| Timer component + CSS | 🔄 In progress |
| Goals component + CSS | 📋 Planned |
| Sidebar navigation | 📋 Planned |
| Backend integration | 📋 Planned |
| Log output module (logs.py) | 📋 Planned |

---

## Planned Features

- [ ] Log output module (`logs.py`)
- [ ] Sidebar navigation with view switching
- [ ] Full backend integration
- [ ] Neural network module for completion time prediction
- [ ] Coding assistant based on project context

---

## Third-party Licenses

| Library | Version | License |
|---|---|---|
| FastAPI | 0.128.0 | MIT |
| Uvicorn | 0.40.0 | BSD-3-Clause |
| python-dotenv | 1.2.1 | BSD-3-Clause |
| Pydantic | 2.12.5 | MIT |
| Starlette | 0.47.3 | BSD-3-Clause |
| Electron | 41.2.1 | MIT |
| TypeScript | - | Apache-2.0 |
| Vite | - | MIT |
| vite-plugin-electron-renderer | 0.14.6 | MIT |

See `THIRD_PARTY_LICENSES.txt` for full details.

---

## License

MIT
