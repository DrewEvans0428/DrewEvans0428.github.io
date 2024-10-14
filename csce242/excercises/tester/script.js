document.addEventListener('DOMContentLoaded', () => {
    const loadPokerData = async () => {
        try {
            // Fetch the JSON data
            const response = await fetch('poker.json');
            if (!response.ok) throw new Error('Failed to load JSON');

            const data = await response.json();
            const pokerPageData = data.pokerPage;

            // Populate the intro section
            document.getElementById('poker-title').textContent = pokerPageData.intro.title;
            document.getElementById('poker-description').textContent = pokerPageData.intro.description;
            document.getElementById('poker-img').src = pokerPageData.intro.img_name;

            // Populate the rules section
            const rulesList = document.getElementById('rules-list');
            pokerPageData.rules.forEach(rule => {
                const ruleItem = document.createElement('li');
                ruleItem.textContent = rule.rule;
                rulesList.append(ruleItem);
            });

            // Populate the guide section
            const guideSteps = document.getElementById('guide-steps');
            pokerPageData.guide.forEach(step => {
                const guideDiv = document.createElement('div');
                guideDiv.classList.add('step');
                
                const stepTitle = document.createElement('h3');
                stepTitle.textContent = step.step;

                const stepDesc = document.createElement('p');
                stepDesc.textContent = step.description;

                guideDiv.append(stepTitle, stepDesc);
                guideSteps.append(guideDiv);
            });

            // Populate the tips section
            const tipsList = document.getElementById('tips-list');
            pokerPageData.tips.forEach(tip => {
                const tipDiv = document.createElement('div');
                tipDiv.classList.add('tip');

                const tipTitle = document.createElement('h3');
                tipTitle.textContent = tip.tip;

                const tipDesc = document.createElement('p');
                tipDesc.textContent = tip.description;

                tipDiv.append(tipTitle, tipDesc);
                tipsList.append(tipDiv);
            });
        } catch (error) {
            console.error('Error loading poker data:', error);
        }
    };

    // Call the function to load and display the poker content
    loadPokerData();
});

