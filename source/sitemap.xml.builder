xml.instruct! :xml, :version=>"1.0", :encoding=>"UTF-8"
xml.urlset xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" do
  sitemap.resources.select { |page| page.destination_path =~ /\.html/ && !(page.destination_path =~ /thank-you/) }.each do |page|
    xml.url do
      xml.loc "https://www.montysincometax.com#{page.url}"
      xml.lastmod Date.today.to_time.iso8601
      xml.changefreq page.data.changefreq || "monthly"
      xml.priority page.data.priority || "0.5"
    end
  end
end