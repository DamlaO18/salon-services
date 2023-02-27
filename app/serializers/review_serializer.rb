class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :salon_id
end
