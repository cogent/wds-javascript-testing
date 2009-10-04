require File.dirname(__FILE__) + '/spec_helper'

describe "DinoBrowse" do

  before do
    $browser.goto("http://localhost:4444")
  end
  
  it %(has the title "Jonah's Dinosaurs") do
    $browser.title.should == %(Jonah's Dinosaurs)
  end
  
  it %(can select a dinosaur to see more details) do
    # $browser.h2(:text, 'Triceratops').click
    puts $browser.methods.sort
    # $browser.div(:text, 'Triceratops').click
  end
end