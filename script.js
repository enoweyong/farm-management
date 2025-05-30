function addCrop() {
    const cropName = prompt("Enter the crop name:");
    const cropQuantity = prompt("Enter the crop quantity:");

    if (cropName && cropQuantity && !isNaN(cropQuantity)) {
        const cropList = document.getElementById('crop-list');
        const cropItem = document.createElement('div');
        cropItem.textContent = `Crop: ${cropName}, Quantity: ${cropQuantity}`;
        cropList.appendChild(cropItem);
    } else {
        alert("Please enter valid crop details.");
    }
}

function addLivestock() {
    const livestockName = prompt("Enter the livestock name:");
    const livestockQuantity = prompt("Enter the livestock quantity:");

    if (livestockName && livestockQuantity && !isNaN(livestockQuantity)) {
        const livestockList = document.getElementById('livestock-list');
        const livestockItem = document.createElement('div');
        livestockItem.textContent = `Livestock: ${livestockName}, Quantity: ${livestockQuantity}`;
        livestockList.appendChild(livestockItem);
    } else {
        alert("Please enter valid livestock details.");
    }
}

function addInventoryItem() {
    const inventoryName = prompt("Enter the inventory item name:");
    const inventoryQuantity = prompt("Enter the inventory quantity:");

    if (inventoryName && inventoryQuantity && !isNaN(inventoryQuantity)) {
        const inventoryList = document.getElementById('inventory-list');
        const inventoryItem = document.createElement('div');
        inventoryItem.textContent = `Item: ${inventoryName}, Quantity: ${inventoryQuantity}`;
        inventoryList.appendChild(inventoryItem);
    } else {
        alert("Please enter valid inventory details.");
    }
}


function logIncome() {
    const incomeAmount = prompt("Enter the income amount:");
    const incomeSource = prompt("Enter the income source:");

    if (incomeAmount && !isNaN(incomeAmount) && incomeSource) {
        const financialList = document.getElementById('financial-list');
        const incomeItem = document.createElement('div');
        incomeItem.textContent = `Income: $${incomeAmount}, Source: ${incomeSource}`;
        financialList.appendChild(incomeItem);
    } else {
        alert("Please enter valid income details.");
    }
}

function logExpense() {
    const incomeAmount = prompt("Enter the income amount:");
    const incomeSource = prompt("Enter the income source:");

    if (incomeAmount && !isNaN(incomeAmount) && incomeSource) {
        const financialList = document.getElementById('financial-list');
        const incomeItem = document.createElement('div');
        incomeItem.textContent = `Income: $${incomeAmount}, Source: ${incomeSource}`;
        financialList.appendChild(incomeItem);
    } else {
        alert("Please enter valid income details.");
    }
}

function manageUsers() {
    const action = prompt("Enter 'add' to add a user or 'remove' to remove a user:");

    if (action === 'add') {
        // Prompt for user details
        const userName = prompt("Enter the user's name:");
        const userEmail = prompt("Enter the user's email:");
        const userRole = prompt("Enter the user's role (admin, manager, worker):");

        // Validate input
        if (userName && userEmail && userRole) {
            const userList = document.getElementById('user-list');
            const userItem = document.createElement('div');
            userItem.textContent = `Name: ${userName}, Email: ${userEmail}, Role: ${userRole}`;
            userList.appendChild(userItem);
        } else {
            alert("Please provide valid user details.");
        }
    } else if (action === 'remove') {
        // Prompt for the name of the user to remove
        const userNameToRemove = prompt("Enter the name of the user to remove:");
        const userList = document.getElementById('user-list');
        const users = Array.from(userList.children);

        // Find and remove the user
        const userToRemove = users.find(user => user.textContent.includes(`Name: ${userNameToRemove}`));
        if (userToRemove) {
            userList.removeChild(userToRemove);
            alert(`User '${userNameToRemove}' has been removed.`);
        } else {
            alert(`User '${userNameToRemove}' not found.`);
        }
    } else {
        alert("Invalid action. Please enter 'add' or 'remove'.");
    }
}


function updateSettings() {
    const theme = document.getElementById('theme-select').value;
    const language = document.getElementById('language-select').value;

    // Apply the selected theme
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else if (theme === 'light') {
        document.body.style.backgroundColor = '#f4f4f9';
        document.body.style.color = '#333';
    }

    // Display a message for the selected language
    const languageMessage = {
        en: "Settings updated! Theme: ",
        es: "¡Configuraciones actualizadas! Tema: ",
        fr: "Paramètres mis à jour ! Thème : "
    };

    alert(`${languageMessage[language] || languageMessage['en']}${theme}`);
}
