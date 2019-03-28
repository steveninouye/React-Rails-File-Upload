class DocumentsController < ApplicationController
  before_action :find_purchase_order, only: [:index, :show, :create]
  protect_from_forgery :except => [:index, :show, :create]

  def index
    @documents = Document.joins(:purchase_order).where(purchase_order: @purchase_order)
  end

  def show
  end

  def new
  end

  def create
    @document = Document.new(document_params)
    @document.purchase_order_id = params[:purchase_order_id]
    if @document.save
      render :create
    else
      render json: @document.errors.full_messages
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def document_params
    params.require(:document).permit(:document_type, :file)
    ##### For handling multiple documents in a single upload
    # params.require(:purchase_order).permit(:type, files: [])
  end

  def find_purchase_order
    @purchase_order = PurchaseOrder.find_by_id(params[:purchase_order_id])
  end
end
