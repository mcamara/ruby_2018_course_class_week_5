require 'rails_helper'

RSpec.describe "teams/show", type: :view do
  before(:each) do
    @team = assign(:team, Team.create!(
      :name => "Name",
      :image_url => "Image Url"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
    expect(rendered).to match(/Image Url/)
  end
end
