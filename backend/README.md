# Kathmandu Tapas - Django Backend

## Setup Instructions

### 1. Activate Virtual Environment
```bash
source venv/bin/activate
```

### 2. Install Dependencies
```bash
pip install -r requirements.txt
```

### 3. Run Migrations
```bash
python manage.py migrate
```

### 4. Create Superuser (optional)
```bash
python manage.py createsuperuser
```

### 5. Run Development Server
```bash
python manage.py runserver
```

The server will be available at `http://127.0.0.1:8000/`

## Installed Packages
- Django 6.0
- Django REST Framework 3.16.1
- Django CORS Headers 4.9.0
- Python Decouple 3.8
- Pillow 12.1.0

## Project Structure
- `config/` - Django project settings
- `manage.py` - Django management script
- `venv/` - Virtual environment (not tracked in git)
- `requirements.txt` - Python dependencies

## Environment Variables
Create a `.env` file in the backend directory with:
```
SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```
