// Sample article data
function searchArticles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const articles = document.querySelectorAll('.A-article');
    
    articles.forEach(article => {
        const title = article.querySelector('.A-articletitle').textContent.toLowerCase();
        if (title.includes(input)) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
  }