# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Spendly** is a Flask-based personal expense tracker built as a step-by-step learning project. Many routes and the database layer are intentionally left as stubs for students to implement.

## Setup & Running

```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the dev server (port 5001)
python app.py
```

## Testing

```bash
# Run all tests
pytest

# Run a single test file
pytest tests/test_foo.py

# Run a specific test
pytest tests/test_foo.py::test_name
```

## Architecture

- **`app.py`** — Flask app entry point; all routes are defined here. Runs on port 5001.
- **`database/db.py`** — SQLite layer (stub). Must implement `get_db()`, `init_db()`, and `seed_db()`. `get_db()` should enable `row_factory` and foreign key support.
- **`templates/base.html`** — Jinja2 base template; all pages extend it via `{% block content %}`. Uses DM Sans / DM Serif Display fonts from Google Fonts.
- **`static/css/style.css`** / **`static/js/main.js`** — single CSS and JS files.

## Implementation Steps (project roadmap)

The placeholder comments in `app.py` and `database/db.py` follow a numbered step sequence:
1. Database Setup (`db.py`)
2–3. Auth (register, login, logout)
4. Profile page
5–6. Expense listing/dashboard
7–9. Add / Edit / Delete expenses
