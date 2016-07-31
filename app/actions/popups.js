export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export function openPopup() {
  return {
    type: OPEN_POPUP
  };
}

export function closePopup() {
  return {
    type: CLOSE_POPUP
  };
}
