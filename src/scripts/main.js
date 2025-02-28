'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendColumn = document.querySelector('.append-column');
const removeColumn = document.querySelector('.remove-column');

appendRow.addEventListener('click', (e) => {
  const tbody = document.querySelector('tbody');

  if (tbody && tbody.children.length < 10) {
    const copyOfRow = document.querySelector('tr')
      ? document.querySelector('tr').cloneNode(true)
      : document.createElement('tr');

    tbody.append(copyOfRow);
  }
});

removeRow.addEventListener('click', (e) => {
  const tbody = document.querySelector('tbody');

  if (tbody && tbody.children.length > 2) {
    tbody.lastElementChild.remove();
  }
});

appendColumn.addEventListener('click', (e) => {
  const allRows = document.querySelectorAll('tr');

  if (allRows.length > 0 && allRows[0].children.length < 10) {
    for (const row of allRows) {
      const newColumn = document.createElement('td');

      row.appendChild(newColumn);
    }
  }
});

removeColumn.addEventListener('click', (e) => {
  const allRows = document.querySelectorAll('tr');

  if (allRows.length > 0 && allRows[0].children.length > 2) {
    for (const row of allRows) {
      row.lastElementChild.remove();
    }
  }
});
