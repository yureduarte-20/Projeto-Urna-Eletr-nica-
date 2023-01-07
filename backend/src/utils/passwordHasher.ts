import bcrypt from 'bcrypt'
const saltRounds = 10;
export const genCryptedPassword = (password: string) => new Promise((resolve, reject) =>
    bcrypt.genSalt(saltRounds, function (err, salt) {
        if (err) return reject(err)
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) return reject(err)
            resolve(hash)
        });
    }))
export const genCryptedPasswordSync = (password : string) => {
    const salt = bcrypt.genSaltSync(saltRounds)
    return bcrypt.hashSync(password, salt)
}
export const verifyPassword = (password: string, encryptedPassword: string) : Promise<boolean> =>
    new Promise((resolve, reject) => bcrypt.compare(password, encryptedPassword, function (err, result) {
        if (err) reject(err)
        resolve(result)
    }));