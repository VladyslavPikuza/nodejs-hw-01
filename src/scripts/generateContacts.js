import fs from 'fs/promises'; 
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

export const generateContacts = async (count) => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data) || [];
    const newContacts = Array.from({ length: count }, createFakeContact);
    const updatedContacts = [...contacts, ...newContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');

    console.log(`Успешно добавлено ${count} новых контактов.`);
  } catch (error) {
    console.error('Ошибка при генерации контактов:', error.message);
  }
};

const main = async () => {
  const contactsToGenerate = 5;
  await generateContacts(contactsToGenerate);
};

main();

