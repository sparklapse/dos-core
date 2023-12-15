/**
 * You component will be named with this label.
 * @type {string}
 */
export const label = "image";

/**
 * The options people can use to configure your source.
 * @type {Record<string, any>}
 */
export const options = {
  src: "https://thispersondoesnotexist.com",
  fit: "fill",
};

/**
 * The default size and position when your source is added.
 * @type {{x: number, y: number, width: number, height: number}}
 */
export const transform = {
  x: 100,
  y: 100,
  width: 200,
  height: 200,
};
