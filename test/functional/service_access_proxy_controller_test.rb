require 'test_helper'

class ServiceAccessProxyControllerTest < ActionController::TestCase
  test "should get search" do
    get :search
    assert_response :success
  end

  test "should get suggest" do
    get :suggest
    assert_response :success
  end

  test "should get geocoder" do
    get :geocoder
    assert_response :success
  end

end
