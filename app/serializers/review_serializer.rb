class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :salon_id, :user_id
end
