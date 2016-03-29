class ProductsController < ApplicationController

  def index
    respond_to do |format|
      format.html
      format.json{ render json: Product.all }
    end
  end

  def destroy
    Product.destroy(params[:id])
    render json: {success: true}, status: :ok
  end

end
