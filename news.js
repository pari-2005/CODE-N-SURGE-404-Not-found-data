// Sample News Data for different categories
const newsData = {
    stockMarket: [
        "Stock Market reaches an all-time high today!",
        "Stocks to watch this week: Tech, Retail, and Pharma.",
        "Stock Market falls amid economic uncertainty."
    ],
    weather: [
        "Heavy rain expected in the northern regions.",
        "Sunny skies across most of the country this weekend.",
        "Monsoon to hit the southern coast by next week."
    ],
    otherNews: [
        "New technology unveiled at the annual tech conference.",
        "Government announces new economic reforms.",
        "Major sporting event postponed due to weather conditions."
    ]
};

// Function to handle navigation item clicks
function onNavItemClick(category) {
    let newsContainer = document.querySelector('.bg-container');
    newsContainer.innerHTML = ''; // Clear previous content

    let selectedNews = newsData[category] || [];

    if (selectedNews.length === 0) {
        newsContainer.innerHTML = "<p> breaking news</p>";
        return;
    }

    selectedNews.forEach(newsItem => {
        let newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `<p>${newsItem}</p>`;
        newsContainer.appendChild(newsElement);
    });
}

// Function to handle search
function searchNews() {
    let query = document.getElementById('search-text').value.toLowerCase();
    let newsContainer = document.querySelector('.bg-container');
    newsContainer.innerHTML = ''; // Clear previous content

    let allNews = [...newsData.stockMarket, ...newsData.weather, ...newsData.otherNews];
    let filteredNews = allNews.filter(news => news.toLowerCase().includes(query));

    if (filteredNews.length === 0) {
        newsContainer.innerHTML = `<p>No results found for "${query}".</p>`;
        return;
    }

    filteredNews.forEach(newsItem => {
        let newsElement = document.createElement('div');
        newsElement.classList.add('news-item');
        newsElement.innerHTML = `<p>${newsItem}</p>`;
        newsContainer.appendChild(newsElement);
    });
}

// Event listener for search button
document.getElementById('search-button').addEventListener('click', searchNews);


function reload() {
    document.getElementById('search-text').value = '';
    onNavItemClick('stockMarket'); // Default to Stock Market news
}
