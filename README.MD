## Local setup guide

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