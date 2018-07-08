//Solution 1
function spinalCase(str) {
  return (str.replace(/([a-z])([A-Z])/g, '$1 $2').split(/[^a-zA-Z0-9]/).join("-").toLowerCase());
}

spinalCase('This Is Spinal Tap');
