json.extract! user, :id, :name, :phno, :created_at, :updated_at
json.url user_url(user, format: :json)
