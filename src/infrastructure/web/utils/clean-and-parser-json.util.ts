export function cleanAndParseJSON(escapedJSONString: string): any {
  const unescapedString = escapedJSONString.replace(/\\\"/g, '"');
  try {
    const jsonObject = JSON.parse(unescapedString);
    return jsonObject;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    throw error;
  }
}
