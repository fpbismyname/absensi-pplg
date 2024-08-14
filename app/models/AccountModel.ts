import { db } from "../libs/firebase";
import { ref, push, get, set } from "firebase/database";
import { AccountType } from "../libs/types";
import { encrypt } from "../libs/passGuard";

const getAccount = async (body: AccountType) => {
  try {
    const { username, password }:AccountType = body;
    if (username && password) {
      const docRef = ref(db, "account");
      const query = await get(docRef);
      const datas: AccountType[] = Object.values(query.val());
      const account = datas.find(
        (doc: AccountType) => doc["username"] === username
      );
      return account;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
const addAccount = async (body: AccountType) => {
  try {
    const {
      role,
      nama_lengkap,
      kelas,
      jurusan,
      email,
      username,
      password,
    }: AccountType = body;
    if (
      role &&
      nama_lengkap &&
      kelas &&
      jurusan &&
      email &&
      username &&
      password
    ) {
      const Account = await getAccount(body);
      if (!Account) {
        const docRef = ref(db, "account/");
        const EncryptedPassword = encrypt(password);
        await set(push(docRef), {
          role: role,
          nama: nama_lengkap,
          kelas: kelas,
          jurusan: jurusan,
          email: email,
          username: username,
          password: EncryptedPassword,
        });
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    return false;
  }
};

export { getAccount, addAccount };
