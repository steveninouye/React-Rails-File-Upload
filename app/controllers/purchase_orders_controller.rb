class PurchaseOrdersController < ApplicationController
  def index
  end

  def show
    @purchase_order = PurchaseOrder.includes(:documents).find_by_id(params[:id])
  end

  def new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def purchase_order_params
  end
end
