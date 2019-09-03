export const urlTypeResolver = (url) => {
  if (url.match(/^#/)) {
    return 'anchor';
  } else if (url.match(/^mailto:/)) {
    return 'mail';
  } else if (url.match(/^www|http/) || url.match(/^\/.*\.(pdf|doc|docx)$/i)) {
    return 'external';
  }

  return 'internal';
};