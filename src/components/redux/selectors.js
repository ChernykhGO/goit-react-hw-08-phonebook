import { createSelector } from "@reduxjs/toolkit";

const getFilter = (state) => state.phonebook.filter;
const getAllContacts = (state) => state.phonebook.items;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (allContacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getFilter,
  getAllContacts,
  getVisibleContacts,
};

// const getVisibleContacts = (state) => {
//   const filter = getFilter(state);
//   const allContacts = getAllContacts(state);
//   const normalizedFilter = filter.toLowerCase();

//   return allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// }; перед. с мемоизацией
