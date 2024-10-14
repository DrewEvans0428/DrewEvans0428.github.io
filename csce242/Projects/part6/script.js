document.addEventListener('DOMContentLoaded', () => {
    const loadContent = async () => {
        try {
            
            const response = await fetch('project.json');
            if (!response.ok) throw new Error('Failed to load');

            const data = await response.json();
            const homePageData = data.homePage;

            const bannerImg = document.getElementById('banner-img');
            if (bannerImg) {
                bannerImg.src = homePageData.banner.img_name;
            }

            const bannerTitle = document.getElementById('banner-title');
            const bannerSubtitle = document.getElementById('banner-subtitle');
            if (bannerTitle && homePageData.banner.title) {
                bannerTitle.textContent = homePageData.banner.title;
            }
            if(bannerSubtitle && homePageData.banner.subtitle){
                bannerSubtitle.textContent = homePageData.banner.subtitle;
            }
           
            const gamesGrid = document.querySelector('.games-grid');
            if(gamesGrid) {
                gamesGrid.innerHTML = '';
                homePageData.games.forEach(game => {
                let gameCard = document.createElement('div');
                gameCard.classList.add('game-card');

                let gameImg = document.createElement('img');
                gameImg.src = game.img_name;
                gameImg.alt = game.title;

                let gameTitle = document.createElement('h3');
                let gameLink = document.createElement('a');
                gameLink.href = game.link;
                gameLink.textContent = game.title;

                gameTitle.appendChild(gameLink);

                let gameDesc = document.createElement('p');
                gameDesc.textContent = game.description;

                let gameFeatures = document.createElement('ul');
                game.features.forEach(feature => {
                    let featureItem = document.createElement('li');
                    featureItem.textContent = feature;
                    gameFeatures.append(featureItem);
                });

                gameCard.append(gameImg, gameTitle, gameDesc, gameFeatures);
                gamesGrid.appendChild(gameCard);
            });
        }
        
        const aboutDescription = document.getElementById('about-description');
        if (aboutDescription) {
            aboutDescription.textContent = homePageData.about.description;
        }
            const footerTextElement = document.getElementById('footer-text');
            if (footerTextElement){
                footerTextElement.textContent = `${homePageData.footer.text} ${homePageData.footer.year}`;
            }
        }
        catch (error){
            console.error('error loading content:', error);
        }
    };

    loadContent();
});