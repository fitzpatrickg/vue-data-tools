# A Larger Vue Application
I created this vue app to practice concepts needed when building larger vue applications such as using mixins to share logic between components, having SCSS files shared between multiple components, and getting data from multiple APIs which requres the use of vuex and the vue-router.

## Gloabal SCSS
The vue.config.js file in the route defines the SCSS files that are accessible from all components. One reason to do this is to easily keep the core colors in my color scheme in a single location, where they are accessible by SCSS variable on all components.

## Weather Page
This view gets weather data from the darksky.net API and formats it in tables & graphs