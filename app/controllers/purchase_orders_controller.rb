class PurchaseOrdersController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
    render json: ["hello world"]
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def purchase_order_params
    params.require(:purchase_order).permit(:document, :document_type)
    ##### For handling multiple documents in a single upload
    # params.require(:purchase_order).permit(:document_type, documents: [])
  end
end
