document.getElementById('assignButton').addEventListener('click', function() {
    const list1Items = document.querySelectorAll('#list1 li');
    const list2Items = document.querySelectorAll('#list2 li');
    const assignmentList = document.getElementById('assignmentList');
    const modal = document.getElementById('modal');

    // Clear previous assignments
    assignmentList.innerHTML = '';

    // Check if the lists have the same length
    if (list1Items.length !== list2Items.length) {
        assignmentList.innerHTML = '<li>Las listas no tienen la misma cantidad de elementos.</li>';
        modal.style.display = 'flex';
        return;
    }

    // Create an array of indices for list2
    let indices = Array.from(Array(list2Items.length).keys());

    // Shuffle the indices array
    indices = indices.sort(() => Math.random() - 0.5);

    // Assign each item from list1 to a randomly selected item from list2
    list1Items.forEach((item, index) => {
        const assignedIndex = indices[index];
        const assignedItem = list2Items[assignedIndex];
        const li = document.createElement('li');

        // Aquí se utiliza un ícono y un texto más llamativo
        li.innerHTML = `<span class="assign-icon">♦</span> <strong>${item.textContent}</strong>  ↔︎ <strong>${assignedItem.textContent}</strong>`;
        assignmentList.appendChild(li);
    });

    // Display the modal
    modal.style.display = 'flex';
});

// Close modal when the user clicks on <span> (x)
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

// Close the modal when the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
