json.array!(@users) do |user|
  json.extract! user, :id, :name, :username, :password, :user_data
  json.url user_url(user, format: :json)
end
