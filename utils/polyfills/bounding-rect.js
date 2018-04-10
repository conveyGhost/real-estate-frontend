// This is needed because Edge does not implement a y property on getBoundingClientRect:
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
export const getY = (rect) => rect.y || rect.bottom
