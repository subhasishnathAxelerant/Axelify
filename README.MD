# Local setup guide

## Using ddev [recommended for everyone]

1. check if `lando` is installed in your system. You may check that using the command `lando info`. If it's not in your system you may ignore this step. But if it's installed, please run the following commands:
   - `lando destroy`
   - `lando poweroff`

2. if brew is not already installed in your system, install it
   - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
   - Add homebrew to your path
   - open a new terminal

3. install ddev
   - `brew install drud/ddev/ddev`
   - `mkcert -install`
   - `ddev start`

4. quick checks:
   a. check if composer is working properly
      `ddev composer` 
   b. check if drush is working properly
      `ddev drush`
   c. check if node is working properly
      `ddev exec -d /var/www/html/web/themes/custom/drupalastic node --version`

5. node tasks
   a. ddev exec -d /var/www/html/web/themes/custom/drupalastic npm i
   b. ddev exec -d /var/www/html/web/themes/custom/drupalastic npm run:build 
   c. ddev exec -d /var/www/html/web/themes/custom/drupalastic npm run:watch 

## Using lando [temporarily discontinued]

1. Make sure that the [lando in installed in your system](https://docs.lando.dev/basics/installation.html)

If you type lando version in your terminal, you should be able to see an output similar to the following:

![](docs/lando-check.png)


2. Fork the following repo: https://gitorious.xyz/svc-area-frontend/trainings/axelify 
![](docs/fork.png)


3. Copy the Clone with HTTPS URL

![](docs/clone.png)


4. Clone the repo on your local using the following command
`git clone <url-copied-in-step-3>`


5. Make sure that you are in the `axelify` directory


6. Run `lando composer install`

This can take some time based on internet speeds.


7. Run `lando start`

Lando will generate the local urls to access the website after lando completes the start process.

![](docs/localurls.png)


8. Goto [http://axelify.lndo.site/](http://axelify.lndo.site/)


9. Choose the relevant options:

![](docs/opts.png)

It may take some time to install Drupal 

![](docs/installation.png)


10.  Finally configure the site
![](docs/configuration.png)


11.  And your local Drupal instance is Ready:
![](docs/local-instance-ready.png)