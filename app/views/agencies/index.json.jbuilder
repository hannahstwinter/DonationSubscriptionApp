json.array!(@agencies) do |agency|
  json.extract! agency, :id, :name, :username, :password, :agency_data
  json.url agency_url(agency, format: :json)
end
