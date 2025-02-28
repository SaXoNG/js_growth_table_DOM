'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const copyOfRow = document.querySelector('tr').cloneNode(true);
  const parentElement = document.querySelector('tbody');

  if (parentElement.children.length < 10) {
    parentElement.append(copyOfRow);
  }
});

removeRow.addEventListener('click', (e) => {
  const parentElement = document.querySelector('tbody');

  if (parentElement.children.length > 2) {
    parentElement.lastElementChild.remove();
  }
});

appendColumn.addEventListener('click', (e) => {
  const allRows = Array.from(document.querySelectorAll('tr'));
  const checkLength = document.querySelector('tr').children.length;

  if (checkLength < 10) {
    for (const row of allRows) {
      const copyOfColumn = document.querySelector('td').cloneNode(true);

      row.append(copyOfColumn);
    }
  }
});

removeColumn.addEventListener('click', (e) => {
  const allRows = Array.from(document.querySelectorAll('tr'));
  const checkLength = document.querySelector('tr').children.length;

  if (checkLength > 2) {
    for (const row of allRows) {
      row.lastElementChild.remove();
    }
  }
})
