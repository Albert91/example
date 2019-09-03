import posts from './data/posts';

export default class RequestService {
  search(query) {
    const results = this.findByTitleAndSummary(posts, query.q);

    return new Promise(resolve => {
      const result = {
        posts: results,
        metadata: {
          recordInfo: {
            total: results.length
          },
          pageInfo: {
            limit: 3,
            current: 1,
            total: results % 3
          },
          previous: { page: 1 },
          next: { page: 2 }
        }
      };

      setTimeout(() => resolve(result), 200)
    });
  }

  findByTitleAndSummary(posts, text) {
    if (!text) {
      return posts;
    }

    return posts.filter(post =>
      post.title.toLowerCase().includes(text.toLowerCase()) ||
      post.summary.toLowerCase().includes(text.toLowerCase())
    );
  }
}
