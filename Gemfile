source 'https://rubygems.org'

gem "jekyll", "~> 4.3.4" # installed by `gem jekyll`
# gem "webrick"        # required when using Ruby >= 3 and Jekyll <= 4.2.2

gem "just-the-docs", "0.10.0" # pinned to the current release
# gem "just-the-docs"        # always download the latest release

# Required for Ruby ≥3.4 compatibility
gem "csv", "~> 3.2"
gem "base64", "~> 0.2.0"
gem "webrick", "~> 1.8"

# Future-proofing for upcoming Ruby versions
if Gem::Version.new(RUBY_VERSION) >= Gem::Version.new("3.4")
  gem "logger", "~> 1.6"
  gem "bigdecimal", "~> 3.1"
end
