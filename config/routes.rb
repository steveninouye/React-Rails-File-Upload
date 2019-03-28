Rails.application.routes.draw do
  resources :purchase_orders do
    resources :documents, only: [:create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
