const I18n = require('i18n-js');

I18n.defaultLocale = 'en';
I18n.translations = {
  en: {
    component: {
      view: {
        blogView: {
          title: 'Library',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut venenatis felis. Proin dignissim' +
            ' fermentum nunc at egestas. Vivamus lobortis maximus justo eu hendrerit. Cras efficitur lectus eu lectus ' +
            'luctus pellentesque. Mauris malesuada interdum neque sit amet elementum. Lorem ipsum dolor sit amet, ' +
            'consectetur adipiscing elit. Fusce vitae bibendum augue, sed volutpat lorem.\n' +
            'Donec in bibendum tellus, a porta risus. Nullam dapibus tempus neque, ullamcorper rhoncus ligula finibus' +
            ' non. Vestibulum sagittis in elit nec euismod. Etiam quis ante libero. Ut augue nulla, elementum eu' +
            ' pharetra id, accumsan nec diam.',
          faq: 'FAQ',
          slider: 'Slider',
          posts: 'Posts',
          resultsTitle: 'Results',
          noResults: 'Results not found, please try something new! Brevity is the soul of wit.'
        }
      },
      cookies: {
        title: 'Cookies',
        content: 'Quisque ac euismod erat. Fusce id placerat est, in sagittis metus. Ut rutrum tempus lacus, in ' +
          'varius massa maximus et. Duis id viverra tortor, ac molestie nisi. Suspendisse at interdum turpis. ' +
          'Vivamus sagittis condimentum leo et maximus. Ut ac nibh nisl. Donec blandit eros interdum sagittis varius.',
        buttonText: 'Close',
      },
      searchBar: {
        placeholder: 'Search'
      }
    }
  },
};
export default I18n;
