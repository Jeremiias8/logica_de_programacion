
// programa que genere contraseñas aleatorias.

const randomPassword = (longitud) => {

    let allCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
    let password = "";

    for (let i = 0; i < longitud; i++) {

        password += allCharacters.charAt
            (Math.floor(Math.random() * allCharacters.length));
    }

    return password;
}

console.log(randomPassword(8));