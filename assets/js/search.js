document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Get all posts from Jekyll
  const posts = [
    {% for post in site.posts %}
      {
        title: "{{ post.title | escape }}",
        url: "{{ post.url | relative_url }}",
        date: "{{ post.date | date: "%b %d, %Y" }}",
        content: "{{ post.content | strip_html | escape }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  searchInput.addEventListener('input', () => {
    const term = searchInput.value.toLowerCase().trim();
    searchResults.innerHTML = '';

    if (term.length < 2) return;

    const matches = posts.filter(post => 
      post.title.toLowerCase().includes(term) || 
      post.content.toLowerCase().includes(term)
    );

    matches.forEach(post => {
      searchResults.innerHTML += `
        <a href="${post.url}" class="search-item">
          <h4>${post.title}</h4>
          <small>${post.date}</small>
        </a>
      `;
    });
  });
});
