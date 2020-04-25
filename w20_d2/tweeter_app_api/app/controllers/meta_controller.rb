class MetaController < ApplicationController
    def about
        render json: {author: "jggold", last_updated: "2020-04-09"}
    end
end