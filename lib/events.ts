//Sign up page event
export const signUpEvent = (formEvent) => {
    const errorMessage = formEvent.target.children[2];
    errorMessage.innerHTML = '';
    return errorMessage;
}