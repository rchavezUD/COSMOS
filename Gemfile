# encoding: ascii-8bit

source 'https://rubygems.org'

gem 'ruby-termios', '>= 0.9' if RbConfig::CONFIG['target_os'] !~ /mswin|mingw|cygwin/i and RUBY_ENGINE == 'ruby'

gemspec

# unless ENV['JENKINS_HOME']
#   # Example of how to use a local branch (doesn't work on Jenkins)
#   #   You also need to set "bundle config local.mock_redis <LOCAL PATH TO CHECKED OUT GEM>"
#   #   For example: bundle config local.mock_redis C:/_Programs/oss/mock_redis
#   #   Make sure the local copy is checked out to the specified branch
#   #   Delete the config: bundle config --delete local.mock_redis
#   group :development do
#     gem 'mock_redis', github: 'jasonatball/mock_redis', branch: 'master'
#   end
# end
