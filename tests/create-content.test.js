import { Selector } from 'testcafe';

fixture `Create Post Page`
    .page `http://localhost:3000/dashboard/create-content`;

test('Check Create Post Page Elements and Functionality', async t => {
    const titleInput = Selector('#title');
    const postButton = Selector('button').withText('Post');
    const loadingSpinner = Selector('.clip-loader'); // Adjust the selector based on your actual spinner class

    // Check if the title input, content editor, and post button are present
    await t
        .expect(titleInput.exists).ok()
        .expect(postButton.exists).ok();

    // Check initial state of the button (should not be disabled and should not show loading spinner)
    await t
        .expect(postButton.hasAttribute('disabled')).ok()
        .expect(loadingSpinner.exists).notOk();

    // Fill out the form
    await t
        .typeText(titleInput, 'Test Title')

    // Submit the form
    await t
        .click(postButton);

    // Check if the button is disabled and loading spinner is visible after submission
    await t
        .expect(postButton.hasAttribute('disabled')).ok()

    // Simulate a delay to wait for the submission to complete
    await t.wait(3000);
});
