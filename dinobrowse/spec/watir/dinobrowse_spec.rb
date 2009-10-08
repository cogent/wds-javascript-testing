require File.dirname(__FILE__) + '/spec_helper'
require 'safariwatir/scripter'

describe "DinoBrowse" do

  before do
    $browser.goto("http://localhost:4444")
  end
  
  it %(has the title "Jonah's Dinosaurs") do
    $browser.title.should == %(Jonah's Dinosaurs)
  end
  
end