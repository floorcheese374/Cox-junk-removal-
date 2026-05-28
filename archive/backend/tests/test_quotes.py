"""Backend API tests for Cox Junk Removal."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://clutter-clear-oh.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root health
def test_root_message(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert "Cox Junk Removal" in data.get("message", "")


# POST /api/quotes happy path
def test_create_quote_success(client):
    payload = {
        "name": "TEST_Jane Doe",
        "phone": "937-555-0123",
        "email": "test@example.com",
        "address": "123 Main St, Springfield, OH",
        "service_type": "Yard Waste",
        "description": "A pile of branches and old leaves to haul off.",
    }
    r = client.post(f"{API}/quotes", json=payload)
    assert r.status_code == 200, r.text
    data = r.json()
    # field validation
    for k in ["id", "name", "phone", "address", "service_type", "description", "created_at"]:
        assert k in data
    assert data["name"] == payload["name"]
    assert data["phone"] == payload["phone"]
    assert data["service_type"] == payload["service_type"]
    assert "_id" not in data


# POST returns 400 for blank required fields
def test_create_quote_blank_required():
    r = requests.post(
        f"{API}/quotes",
        json={"name": "  ", "phone": "  ", "address": "  ", "service_type": "x", "description": "y"},
    )
    assert r.status_code == 400


# POST returns 422 when required fields are missing
@pytest.mark.parametrize("missing", ["name", "phone", "address", "service_type", "description"])
def test_create_quote_missing_field(missing):
    payload = {
        "name": "TEST_X",
        "phone": "937-000-0000",
        "address": "addr",
        "service_type": "Yard Waste",
        "description": "desc here",
    }
    payload.pop(missing)
    r = requests.post(f"{API}/quotes", json=payload)
    assert r.status_code == 422, f"Expected 422 for missing {missing}, got {r.status_code}"


# GET /api/quotes returns list sorted desc, no _id
def test_list_quotes_sorted_no_id(client):
    # ensure at least one record exists
    client.post(
        f"{API}/quotes",
        json={
            "name": "TEST_Sort A",
            "phone": "937-000-0001",
            "address": "addr A",
            "service_type": "Cardboard Removal",
            "description": "boxes pile",
        },
    )
    client.post(
        f"{API}/quotes",
        json={
            "name": "TEST_Sort B",
            "phone": "937-000-0002",
            "address": "addr B",
            "service_type": "Scrap Metal",
            "description": "old grill",
        },
    )

    r = client.get(f"{API}/quotes")
    assert r.status_code == 200
    quotes = r.json()
    assert isinstance(quotes, list)
    assert len(quotes) >= 2
    # no _id
    for q in quotes:
        assert "_id" not in q
        assert "id" in q
        assert "created_at" in q
    # sorted desc by created_at
    timestamps = [q["created_at"] for q in quotes]
    assert timestamps == sorted(timestamps, reverse=True), "Quotes not sorted by created_at desc"
