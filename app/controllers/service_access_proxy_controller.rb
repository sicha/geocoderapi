class ServiceAccessProxyController < ApplicationController
  require 'cgi'
  require 'net/http'
  require 'uri'
  require 'rexml/document'


  def geocode
    type = params[:type]
    link = "http://geocoder.socialexplorer.com/" + type + "?#{params[:url].split('?').last}"
    parameters = CGI::parse(params[:url].split('?').last)
    isXML = parameters["format"].last.eql?("xml")

    @resultData = Net::HTTP.get(URI.parse(link))

    if isXML
      xmlDoc = REXML::Document.new @resultData
      @resultData = ''
      xmlDoc.write(@resultData, 2)
    end

    render :layout => false
  end
end
