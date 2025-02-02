import { create } from 'zustand';

interface SignupForm {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  gender: '' | 'male' | 'female';
  phone1: string;
  phone2: string;
  phone3: string;
  verificationCode: string;
  timer: string;
  isPhoneVerifying: boolean;
  isVerificationNumberValid: boolean;
  isVerificationNumberChecked: boolean;
  showPassword: boolean;
  showPasswordConfirm: boolean;
  errors: {
    email?: string;
    password?: string;
    passwordConfirm?: string;
    name?: string;
    birthYear?: string;
    birthMonth?: string;
    birthDay?: string;
    phone?: string;
    gender?: string;
    globalError?: string;
    submit?: string;
  };
}

interface UserInfo {
  name: string;
}

type SignupFormField = keyof Omit<SignupForm, 'errors'>;

interface AuthStore {
  // 로그인 모달 관련 상태
  isLoginModalOpen: boolean;
  loginModalType: 'default' | 'expert';
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  openLoginModal: () => void;
  openExpertLoginModal: () => void;
  closeLoginModal: () => void;
  login: (userInfo: UserInfo) => void;
  logout: () => void;

  // 회원가입 폼 관련 상태
  signupForm: SignupForm;
  setSignupForm: (field: SignupFormField, value: string | boolean) => void;
  setFormError: (field: keyof SignupForm['errors'], message: string | undefined) => void;
  resetSignupForm: () => void;
  checkVerificationNumber: (code: string) => void;
  togglePasswordVisibility: (field: 'password' | 'passwordConfirm') => void;
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
  timer: '03:00',
  isPhoneVerifying: false,
  isVerificationNumberValid: false,
  isVerificationNumberChecked: false,
  showPassword: false,
  showPasswordConfirm: false,
  errors: {},
};

const useAuthStore = create<AuthStore>((set) => ({
  // 로그인 모달 관련 상태와 액션
  isLoginModalOpen: false,
  loginModalType: 'default',
  isLoggedIn: false,
  userInfo: null,
  openLoginModal: () => set({ isLoginModalOpen: true, loginModalType: 'default' }),
  openExpertLoginModal: () => set({ isLoginModalOpen: true, loginModalType: 'expert' }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  login: (userInfo) => set({ isLoggedIn: true, userInfo, isLoginModalOpen: false }),
  logout: () => set({ isLoggedIn: false, userInfo: null }),

  // 회원가입 폼 관련 상태와 액션
  signupForm: initialSignupForm,
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
  resetSignupForm: () => set({ signupForm: initialSignupForm }),
  checkVerificationNumber: (code: string) =>
    set((state) => ({
      signupForm: {
        ...state.signupForm,
        isVerificationNumberChecked: true,
        isVerificationNumberValid: code === '35233',
      },
    })),
  togglePasswordVisibility: (field: 'password' | 'passwordConfirm') =>
    set((state) => ({
      signupForm: {
        ...state.signupForm,
        [field === 'password' ? 'showPassword' : 'showPasswordConfirm']:
          !state.signupForm[field === 'password' ? 'showPassword' : 'showPasswordConfirm'],
      },
    })),
}));

export type { SignupForm, SignupFormField, UserInfo };
export default useAuthStore;
