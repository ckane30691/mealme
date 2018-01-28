class EatersController < ApplicationController

  def index
		@eaters = Eater.all
		render :index
  end

end
