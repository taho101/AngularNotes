# This file is used by Rack-based servers to start the application.

# Precompile JavaScript files for application
Rails.application.config.assets.precompile += %w( underscore-min.js )
Rails.application.config.assets.precompile += %w( models.js )

require ::File.expand_path('../config/environment',  __FILE__)
run Rails.application
