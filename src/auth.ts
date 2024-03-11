/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: false,
    async signin(user: string, password: string) {
        console.log({ user, password })
        const rawResponse = await fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user, password }),
        });
        if (rawResponse.status === 200) fakeAuthProvider.isAuthenticated = true;
        return rawResponse.status
    },
    signout(callback: VoidFunction) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

export { fakeAuthProvider };