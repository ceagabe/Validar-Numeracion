
document.getElementById('phoneListForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const inputNumbers = document.getElementById('phoneNumbers').value;
    const numberList = inputNumbers.split(',').map(num => num.trim()); // Split and trim the input list
    let results = '';

    numberList.forEach((inputNumber, index) => {
        try {
            const number = phoneUtil.parseAndKeepRawInput(inputNumber, 'AR'); // Default to 'US'
            const isValid = phoneUtil.isValidNumber(number);  // Validate each phone number
            
            results += `Number ${index + 1}: ${inputNumber} is ${isValid ? 'Valid' : 'Invalid'}`;
            results += `\nFormatted: ${phoneUtil.format(number, libphonenumber.PhoneNumberFormat.INTERNATIONAL)}\n\n`;
        } catch (error) {
            results += `Number ${index + 1}: ${inputNumber} - Error parsing phone number!\n\n`;
        }
    });

    document.getElementById('results').innerText = results;  // Output the results
});
