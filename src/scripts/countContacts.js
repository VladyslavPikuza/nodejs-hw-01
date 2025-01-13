import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data) || [];
    return contacts.length;
  } catch (error) {
    console.error('Ошибка при подсчёте контактов:', error.message);
    return 0;
  }
};

const main = async () => {
  const count = await countContacts();
  console.log(`Количество контактов: ${count}`);
};

main();
