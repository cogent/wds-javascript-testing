require "rubygems"
require "spec"

$LOAD_PATH << File.dirname(__FILE__)

require "app_server"

dinobrowse_config = File.join(File.dirname(__FILE__), "..", "..", "..", "dinobrowse", "config.ru")
dinobrowse_server = AppServer.new(dinobrowse_config)

def open_browser
  require "safariwatir"
  Watir::Safari.new
  # $LOAD_PATH << File.join(File.dirname(__FILE__), "..", "vendor", "firedriver", "lib")
  # require "firedriver"
  # FireDriver::Browser.new
end

Spec::Runner.configure do |config|

  config.before(:all) do
    $browser = open_browser
    dinobrowse_server.start
  end

  config.after(:all) do
    dinobrowse_server.stop
  end

end
