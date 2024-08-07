import { Selector } from 'testcafe';

fixture `Posts Page`
    .page `http://localhost:3000/dashboard/feed`;

test('Check Posts Page Elements and Functionality', async t => {
    const searchInput = Selector('input[placeholder="Search post..."]');
    const likeButtons = Selector('button').withText('Like'); // For like buttons
    const shareButtons = Selector('button').withText('Share'); // For share buttons
    const commentButtons = Selector('button').withText('Comments'); // For comment buttons
});
