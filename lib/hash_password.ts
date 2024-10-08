import bcrypt from "bcryptjs";
const saltRounds = 10;

async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, saltRounds);
}

async function verifyPassword(
  existingHash: string,
  plainTextValue: string
): Promise<boolean> {
  return await bcrypt.compare(plainTextValue, existingHash);
}

export {hashPassword, verifyPassword };
