source "https://rubygems.org"

# GitHub Pages gem to manage dependencies
# gem "github-pages", "~> 227", group: :jekyll_plugins

gem "jekyll", "~> 4.4.1"
gem "liquid", "~> 4.0.4"
gem "jekyll-datapage-generator"

ruby "3.3.4"

# gem "webrick"        # required when using Ruby >= 3 and Jekyll <= 4.2.2

# Required for Ruby ≥3.4 compatibility
gem "csv", "~> 3.2"
gem "base64", "~> 0.2.0"
gem "webrick", "~> 1.9.1"

# Future-proofing for upcoming Ruby versions
if Gem::Version.new(RUBY_VERSION) >= Gem::Version.new("3.4")
  gem "logger", "~> 1.6"
  gem "bigdecimal", "~> 3.1"
end