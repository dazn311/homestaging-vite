export async function hashStringSHA256(message:string) {
  // Encode the string as UTF-8 bytes
  const msgBuffer = new TextEncoder().encode(message);//'utf-8'

  // Hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // Convert the ArrayBuffer to a hexadecimal string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
}

// Example usage:
// hashStringSHA256("password").then(hash => console.log(hash));
// Output: 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8
