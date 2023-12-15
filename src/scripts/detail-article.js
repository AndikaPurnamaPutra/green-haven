const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get('id');

fetch(`https://api-article.abdulfaqih.eu.org/article/${articleId}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.status === 'success') {
      const articleDetail = data.data.article;
      console.log(articleDetail);

      const articleDetailElement = document.getElementById('detail-article');

      const detailHTML = `
      <h1 class="article-title">${articleDetail.title}</h1>
      <div class="img-article">
        <img src="${articleDetail.image}" width="100px" alt="artikel 1" />
        <div class="data-article">
          <p class="tanggal">${new Date(articleDetail.date).toLocaleDateString()}</p>
          <p class="penulis">${articleDetail.author}</p>
        </div>
      </div>
      
      <div class="article-content">
        <p>
        ${articleDetail.content}
        </p>
      </div>
      `;
      articleDetailElement.innerHTML = detailHTML;
      //
    } else {
      console.error('API request failed with message:', data.message);
    }
  })
  .catch((error) => console.error('Error fetching data from API:', error));
