import { PAGE_UPDATE_IN_STATE } from "../actiontype";

function PageUpdate(text) {
  return {
    type: PAGE_UPDATE_IN_STATE,
    payload: text
  };
}

export const PageUpdateAPI = (page) => dispatch => {
  dispatch(PageUpdate(page))
}
export default PageUpdate