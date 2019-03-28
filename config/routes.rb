Rails.application.routes.draw do
  get 'purchase_orders/index'
  get 'purchase_orders/show'
  get 'purchase_orders/new'
  get 'purchase_orders/create'
  get 'purchase_orders/edit'
  get 'purchase_orders/update'
  get 'purchase_orders/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
