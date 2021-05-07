export const userRegisterSelector = state => state.userRegister.userInfo;
export const loadingRegisterSelector = state => state.userRegister.loading;
export const errorRegisterSelector = state => state.userRegister.error;

export const userSigninSelector = state => state.userSignin.userInfo;
export const loadingSigninSelector = state => state.userSignin.loading;
export const errorSigninSelector = state => state.userSignin.error;
