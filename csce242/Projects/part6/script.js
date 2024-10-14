document.addEventListener('DOMContentLoaded', () => {
    const loadContent = async () => {
        try{
            const response = await fetch('project.json');
            if (!response.ok) throw new Error('Failed to load');

            const data = await response.json();
            const homePageData = data.homePage;

            document.getElementById('banner-title').textContent = homePageData.banner.title;
            document.getElementById('banner-subtitle').textContent = homePageData.banner.subtitle;
            document.getElementById('banner-img').src = homePageData.banner.img_name;

            const gamesGrid = document.querySelector('.games-grid');
            homePageData.games.forEach(game => {
                const gameCard = document.createElement('div');
                gameCard.classList.add('game-card');

                const gameImg = document.createElement('img');
                gameImg = game.img_name;
                gameImg.alt = game.title;

                const gameTitle = document.createElement('h3');
                const gameLink = document.createElement('a');
                gameLink.href = game.link;
                gameLink.textContent = game.title;
                gameTitle.appendChild(gameLink);

                const gameDesc = document.createElement('p');
                gameDesc.textContent = game.description;

                const gameFeatures = document.createElement('ul');
                game.features.forEach(feature => {
                    const featureItem = document.createElement('li');
                    featureItem.textContent = feature;
                    gameFeatures.append(featureItem);
                });

                gameCard.append(gameImg, gameTitle, gameDesc, gameFeatures);
                gamesGrid.appendChild(gameCard);
            });

            document.getElementById('about-description').textContent = homePageData.about.description;

            const footerText = `${homePageData.footer.text} ${homePageData.footer.year}`;
            document.getElementById('footer-text').textContent = footerText;
        }
        catch (error){
            console.error('error loading content:', error);
        }
    };

    loadContent();
});