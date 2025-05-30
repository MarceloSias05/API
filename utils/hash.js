import crypto from "crypto";

export const getSalt = () => {
    return crypto
    .randomBytes(16)
    .toString("base64url")
    .substring(0, process.env.SALT_LENGTH);
};

export const hashPassword = (text, salt) => {
    const hashing = crypto.createHash("sha512");
    const hash = hashing.update(text + salt);
    return hashing.digest("base64url");
};

