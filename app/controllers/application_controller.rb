class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    def set_csrf_cookie
        if protect_against_forgery?
          cookies['XSRF-TOKEN'] = form_authenticity_token
        end
    end

    def verified_request?
        super || valid_authenticity_token?(session, request.headers['X-XSRF-TOKEN'])
    end
end
