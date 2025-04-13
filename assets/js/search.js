document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (term.length < 2) return;

    // Search through all posts
    {% for post in site.posts %}
      const postTitle = "{{ post.title | downcase }}";
      const postContent = "{{ post.content | strip_html | downcase }}";
      
      if (postTitle.includes(term) || postContent.includes(term)) {
        searchResults.innerHTML += `
          <a href="{{ post.url | relative_url }}" class="search-item">
            <h4>{{ post.title }}</h4>
            <small>{{ post.date | date: "%b %d, %Y" }}</small>
          </a>
        `;
      }
    {% endfor %}
  });
});
