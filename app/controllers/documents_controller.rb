class DocumentsController < ApplicationController
  def index
  end

  def show
  end

  def new
  end

  def create
    @document = Document.new(document_params)
    @document.purchase_order_id = params[:purchase_order_id]
    if @document.save
      render json: ["Document uploaded"]
    else
      render json: ["error"]
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
    params.require(:document).permit(:type, :file)
    ##### For handling multiple documents in a single upload
    # params.require(:purchase_order).permit(:type, files: [])
  end
end
