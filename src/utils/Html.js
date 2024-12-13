export function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}
<<<<<<< HEAD
=======
export function findNonEmptyString() {
  let args = Array.from(arguments);
  for (let i = 0; i < args.length; i++) {
    if (args[i] !== '' && typeof args[i] === 'string') {
      return args[i];
    }
  }
  return '';
}
>>>>>>> 41e6388fdb02a9a480f7c8cbf2dd616cda70d7fc
