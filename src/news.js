const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=1aad0a12f2e544059546182f91227849';

export async function getNews() {
  try {
    return fetch(url) .then(response => response.json()) .then(json => json.articles)
  } catch (error) {
    throw error;
  }
}
