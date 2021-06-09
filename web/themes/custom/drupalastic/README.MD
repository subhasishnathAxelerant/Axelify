## Theme documentation [Work In Progress]

- cd into the themes/custom/drupalastic directory
- run `lando npm install`
- run `lando npm run build` [you will need to do this just once during initial setup]
- run `lando npm run watch` & start theming


## Working with SVG
- right now we are not using sprites so nothing to be done in the svg directory
- please place even svg images and logo's in the `images` directory [add more details]

base => common utilites & css vars [will be loaded once globally]
config => scss variables / mixins & extends [will be included in multiple files]

We use mixins every where: https://csswizardry.com/2016/02/mixins-better-for-performance/
