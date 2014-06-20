class SongsController < ApplicationController

  respond_to :json

  def index
    @songs = Song.all
    respond_with(@songs) do |format|
      format.json { render :json => @songs, :root => false }
    end
  end

end
