require File.dirname(__FILE__) + '/spec_helper'

describe "DinoBrowse" do

  it %(has the title "Jonah's Dinosaurs") do
    $browser.goto("http://localhost:4444")
    $browser.title.should == %(Jonah's Dinosaurs)
  end
  
end