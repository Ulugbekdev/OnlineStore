//Sign up page event
export const signUpEvent = (formEvent) => {
    const errorMessage = formEvent.target.children[2];
    errorMessage.innerHTML = '';
    return errorMessage;
}

//Sign in page event 
export const signInEvent = (formEvent) => {
    const errorMessage = formEvent.target.children[2];
    errorMessage.innerHTML = '';
    return errorMessage;
}