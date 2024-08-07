import { Selector } from 'testcafe';

fixture `Sign Up Page`
    .page `http://localhost:3000/signup`;

test('Sign Up with Email', async t => {
    // Select form fields
    const firstNameInput = Selector('#firstname');
    const lastNameInput = Selector('#lastname');
    const emailInput = Selector('#email');
    const passwordInput = Selector('#password');
    const signUpButton = Selector('button').withText('Sign Up');
    const errorMessage = Selector('p').withText(/error/i);

    // Fill the form fields
    await t
        .typeText(firstNameInput, 'John')
        .typeText(lastNameInput, 'Doe')
        .typeText(emailInput, 'john.doe@example.com')
        .typeText(passwordInput, 'securePassword123')
        .click(signUpButton);
});

test('Sign Up with Google', async t => {
    // Click the Google sign-up button
    const googleSignUpButton = Selector('button').withText('Sign up with Google');

    await t
        .click(googleSignUpButton);
});
