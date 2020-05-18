# Monty's Income Tax Services

[![Netlify Status][netlify-badge]][netlify-project]

Monty's is an experienced independent income tax preparation service located in Chilliwack, British Columbia, Canada.
This is a static HTML website generated with [Middleman][middleman-website] and deployed to [Netlify][netlify-website].

![Monty's Homepage](/source/images/homepage.png)

## Development

If, for some kooky reason, you feel the need to run this app locally, the following needs to happen:

- [Install Ruby][ruby-install] if not already installed. 
- Install Middleman by executing the following from the command line:
```
$ gem install middleman
```
- Clone the repository:
```
$ git clone https://github.com/ml7757/montys-income-tax.git
```
- `cd` into the repository and install its dependencies:
```
$ bundle install
```
- To start the preview web server run:
```
$ bundle exec middleman
```
- This will start a local web server running at: `http://localhost:4567/`

## Photo Credits

- [StellrWeb][unsplash-credit]

[montys-website]: https://www.montysincometax.com
[netlify-badge]: https://api.netlify.com/api/v1/badges/47f8e335-cf3e-46c3-b9fe-8f972704fc50/deploy-status
[netlify-project]: https://app.netlify.com/sites/quizzical-goldwasser-7d53ab/deploys
[netlify-website]: https://www.netlify.com/
[middleman-website]: https://middlemanapp.com/
[ruby-install]: https://www.ruby-lang.org/en/documentation/installation/
[unsplash-credit]: https://unsplash.com/photos/djb1whucfBY
