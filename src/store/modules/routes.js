const routesModule = {
  state: () => ({
    routes: [
      {
        name: 'Home',
        link: '/',
        icon: 'fas fa-home',
      },
      {
        name: 'Weather',
        link: '/weather-graphs',
        icon: 'fas fa-cloud',
      },
      {
        name: 'About',
        link: '/about',
        icon: 'fas fa-file-alt',
      },
    ],
    searchResults: [
      {
        name: 'Home',
        link: '/',
      },
      {
        name: 'Weather',
        link: '/weather-graphs',
      },
      {
        name: 'About',
        link: '/about',
        nestedResults: [
          {
            name: 'Who We Are',
            link: '/about#whoweare',
          },
          {
            name: 'Our Mission',
            link: '/about#ourmission',
          },
          {
            name: 'More Facts',
            link: '/about#morefacts',
          },
        ],
      },
    ],
  }),
  getters: {
    getRoutesForNav: (state) => state.routes,
    getAllSearchResults: (state) => state.searchResults,
    filterSearchResults: (state) => (filter) => {
      const results = [];
      state.searchResults.forEach((result) => {
        if (result.name.includes(filter)) {
          results.push(result);
        }
      });
      return results;
    },
  },
};

module.exports = routesModule;
