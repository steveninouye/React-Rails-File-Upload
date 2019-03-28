Rails.application.routes.draw do
  resources :purchase_orders
  resources :purchase_orders, defaults: {format: :json} do
    resources :documents, only: [:index, :create]
  end
  resources :documents, except: [:index, :create]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
