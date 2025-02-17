import { create } from 'zustand';

export type SignupFormField =
  | 'email'
  | 'password'
  | 'passwordConfirm'
  | 'name'
  | 'birthYear'
  | 'birthMonth'
  | 'birthDay'
  | 'gender'
  | 'phone1'
  | 'phone2'
  | 'phone3'
  | 'verificationCode'
  | 'showPassword'
  | 'showPasswordConfirm'
  | 'isPhoneVerifying'
  | 'isVerificationNumberValid'
  | 'isVerificationNumberChecked';

interface UserInfo {
  userId: number;
  userName: string;
  role: 'ADMIN' | 'FARMER' | 'EXPERT';
  email: string;
  token: string;
}

interface SignupForm {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  gender: 'male' | 'female' | '';
  phone1: string;
  phone2: string;
  phone3: string;
  verificationCode: string;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  isPhoneVerifying: boolean;
  isVerificationNumberValid: boolean;
  isVerificationNumberChecked: boolean;
  errors: {
    email?: string;
    password?: string;
    passwordConfirm?: string;
    name?: string;
    birthYear?: string;
    gender?: string;
    phone?: string;
    submit?: string;
  };
}

interface AuthStore {
  isLoginModalOpen: boolean;
  loginModalType: 'default' | 'expert';
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  signupForm: SignupForm;
  openLoginModal: () => void;
  openExpertLoginModal: () => void;
  closeLoginModal: () => void;
  login: (userInfo: UserInfo) => void;
  logout: () => void;
  setSignupForm: (field: SignupFormField, value: string | boolean) => void;
  setFormError: (field: keyof SignupForm['errors'], message: string | undefined) => void;
  updateUserInfo: (updatedInfo: UserInfo) => void;
}

const initialSignupForm: SignupForm = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
  birthYear: '',
  birthMonth: '',
  birthDay: '',
  gender: '',
  phone1: '',
  phone2: '',
  phone3: '',
  verificationCode: '',
  showPassword: false,
  showPasswordConfirm: false,
  isPhoneVerifying: false,
  isVerificationNumberValid: false,
  isVerificationNumberChecked: false,
  errors: {},
};

const useAuthStore = create<AuthStore>((set) => {
  const savedUserInfo = localStorage.getItem('userInfo');
  const parsedUserInfo = savedUserInfo ? JSON.parse(savedUserInfo) : null;

  return {
    isLoginModalOpen: false,
    loginModalType: 'default',
    isLoggedIn: !!parsedUserInfo,
    userInfo: parsedUserInfo,
    signupForm: initialSignupForm,
    openLoginModal: () => set({ isLoginModalOpen: true, loginModalType: 'default' }),
    openExpertLoginModal: () => set({ isLoginModalOpen: true, loginModalType: 'expert' }),
    closeLoginModal: () => set({ isLoginModalOpen: false }),
    login: (userInfo) => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
      set({ isLoggedIn: true, userInfo, isLoginModalOpen: false });
    },
    logout: () => {
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      set({ isLoggedIn: false, userInfo: null });
    },
    setSignupForm: (field, value) =>
      set((state) => ({
        signupForm: {
          ...state.signupForm,
          [field]: value,
        },
      })),
    setFormError: (field, message) =>
      set((state) => ({
        signupForm: {
          ...state.signupForm,
          errors: {
            ...state.signupForm.errors,
            [field]: message,
          },
        },
      })),
    updateUserInfo: (updatedInfo) => {
      localStorage.setItem('userInfo', JSON.stringify(updatedInfo));
      set({ userInfo: updatedInfo });
    },
  };
});

export default useAuthStore;
