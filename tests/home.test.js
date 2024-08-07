import { Selector } from 'testcafe';

fixture `Home Page`
    .page `http://localhost:3000`;

test('Check Header and Navigation Links', async t => {
    const header = Selector('header');
    const logo = header.find('span[role="img"]');
    const loginLink = header.find('Link').withText('Log In');
    const signupLink = header.find('Link').withText('Sign Up');

    await t
        .expect(header.exists).ok()
        .expect(logo.exists).ok()
        .expect(logo.textContent).eql('🏀')
        .expect(signupLink.exists).notOk();
});

test('Verify Hero Section and About Chatter Section', async t => {
    const heroSection = Selector('#hero');
    const heroTitle = heroSection.find('h1');
    const heroSubtitle = heroSection.find('h3');
    const heroLink = heroSection.find('Link').withText('Get started');

    await t
        .expect(heroSection.exists).ok()
        .expect(heroTitle.exists).ok()
        .expect(heroTitle.textContent).eql('Welcome to Chatter+!')
        .expect(heroSubtitle.exists).ok()

    const aboutSection = Selector('#about');
    const aboutTitle = aboutSection.find('h2');
    const aboutText = aboutSection.find('p');

    await t
        .expect(aboutSection.exists).ok()
        .expect(aboutTitle.exists).ok()
        .expect(aboutTitle.textContent).eql('About Chatter+')
        .expect(aboutText.exists).ok();
});

test('Check Cards Section and Footer', async t => {
    const cardsSection = Selector('#cards');
    const cardTitles = [
        'Analytics',
        'Social Interaction',
        'Content Creation'
    ];

    await t
        .expect(cardsSection.exists).ok();

    for (const title of cardTitles) {
        const cardTitle = cardsSection.find('h2').withText(title);
        await t.expect(cardTitle.exists).ok();
    }

    const footer = Selector('footer');

    await t
        .expect(footer.exists).ok();
});
