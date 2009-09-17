require "rubygems"
require "spec"

require "safariwatir"

$LOAD_PATH << File.dirname(__FILE__)

require "app_server"

dinobrowse_config = File.join(File.dirname(__FILE__), "..", "..", "..", "dinobrowse", "config.ru")
dinobrowse_server = AppServer.new(dinobrowse_config)

Spec::Runner.configure do |config|

  config.before(:all) do
    dinobrowse_server.start
  end

  config.after(:all) do
    dinobrowse_server.stop
  end

end
