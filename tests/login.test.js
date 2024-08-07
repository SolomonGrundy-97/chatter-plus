import { Selector } from 'testcafe';

fixture `Login Page`
    .page `http://localhost:3000/login`;

test('Login with Email', async t => {
    // Select form fields and buttons
    const emailInput = Selector('#email');
    const passwordInput = Selector('#password');
    const loginButton = Selector('button').withText('Log In');
    const errorMessage = Selector('p').withText(/Incorrect email or password. Please try again./i);

    // Fill the form fields
    await t
        .typeText(emailInput, 'testuser@example.com')
        .typeText(passwordInput, 'password123')
        .click(loginButton);

});

test('Login with Google', async t => {
    // Click the Google login button
    const googleLoginButton = Selector('button').withText('Log in with Google');

    await t
        .click(googleLoginButton);

});
