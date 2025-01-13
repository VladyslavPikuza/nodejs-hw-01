import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), 'utf-8');
    console.log('Все контакты удалены.');
  } catch (error) {
    console.error('Ошибка при удалении всех контактов:', error.message);
  }
};

const main = async () => {
  await removeAllContacts();
};

main();
