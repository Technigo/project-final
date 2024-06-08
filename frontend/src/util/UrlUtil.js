export const getOptimizedUrl = (url, width) => {
  const OFFSET_LENGTH = 8;
  const index = url.indexOf("/upload");
  if (index === -1) {
    return url;
  } else {
    const startUrl = url.slice(0, index + OFFSET_LENGTH);
    const endUrl = url.slice(index + OFFSET_LENGTH);

    return `${startUrl}w_${width},q_auto/${endUrl}`;
  }
};
