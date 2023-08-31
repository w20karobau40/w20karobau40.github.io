# Set the environment variable
$env:JEKYLL_ENV = "production"

$env:JEKYLL_ENV

# Execute the Jekyll command
bundle exec jekyll serve --strict_front_matter --incremental
