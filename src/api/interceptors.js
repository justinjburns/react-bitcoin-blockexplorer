export const responseSuccess = res => res;

export const responseError = ({ response }) => Promise.reject(response);