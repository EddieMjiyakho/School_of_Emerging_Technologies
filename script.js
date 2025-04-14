// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }

    // News data array
    const newsArticles = [
        {
            date: "07 / 04",
            title: "Benefits Of Async/Await",
            excerpt: "Exploring how asynchronous functions are transforming modern programming",
            image: "assets/news1.jpg"
        },
        {
            date: "07 / 17",
            title: "Key Considerations Of IPaaS",
            excerpt: "Essential factors for successful cloud integration platform implementation",
            image: "assets/news2.jpeg"
        },
        {
            date: "07 / 22",
            title: "Never Stop Optimizing Your Code",
            excerpt: "Continuous improvement practices for maintaining high-performance applications",
            image: "assets/pic.jpg"
        }
    ];

    // Function to render news articles
    function renderNews() {
        const container = document.getElementById('newsContainer');
        
        if (container) {
            newsArticles.forEach(article => {
                const articleHTML = `
                    <article class="news-card">
                        <div class="news-date">${article.date}</div>
                        <div class="news-image">
                            <img src="${article.image}" alt="${article.title}">
                        </div>
                        <div class="news-content">
                            <h3>${article.title}</h3>
                            <p>${article.excerpt}</p>
                            <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </article>
                `;
                container.innerHTML += articleHTML;
            });
        }
    }

    // Initialize functions
    renderNews();
});