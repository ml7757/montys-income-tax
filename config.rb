activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :livereload
activate :directory_indexes
activate :sprockets

configure :build do
  activate :minify_css
  activate :minify_javascript
	activate :asset_hash, :ignore => [/^svg/, /^contact/]
end
