require File.dirname(__FILE__) + '/spec_helper'
require 'safariwatir/scripter'

describe "DinoBrowse" do

  before do
    $browser.goto("http://localhost:4444")
  end
  
  it %(has the title "Jonah's Dinosaurs") do
    $browser.title.should == %(Jonah's Dinosaurs)
  end
  
  it %(can select a dinosaur to see more details) do
    $browser.span(:class, 'dinosaur_name').click
    puts $browser.div(:class, 'dinosaur').methods.sort
    
  end
end