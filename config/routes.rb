Rails.application.routes.draw do
  resources :purchase_orders
  resources :purchase_orders, defaults: {format: :json} do
    resources :documents, only: [:index, :show, :create]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
