line_comments = false
output_style = :compact # or :nested, :expanded, :compressed, :compact
environment = :development

# Require any additional compass plugins here.
# require 'lemonade'

# Set this to the root of your project when deployed:
http_path        = "/"
css_dir          = "css"
sass_dir         = "sass"
images_dir       = "images"
fonts_dir        = "fonts"
javascripts_dir  = "js"
preferred_syntax = :sass

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

=begin
require 'fileutils'
on_stylesheet_saved do |file|
  if File.exists?(file) && File.basename(file) == "style.css"
    puts "Moving: #{file}"
    FileUtils.mv(file, File.dirname(file) + "/../" + File.basename(file))
  end
end
=end
