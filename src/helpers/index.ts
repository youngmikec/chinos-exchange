export const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
  // Define a regex pattern for a valid 11-digit phone number
  const regex = /^(070|080|081|090|091)[0-9]{8}$/;

  // Use the test method to check if the phoneNumber matches the pattern
  return regex.test(phoneNumber);
}