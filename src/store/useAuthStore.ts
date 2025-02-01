import { create } from 'zustand';

interface SignupForm {
  id: string;
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
    id?: string;
    password?: string;
    passwordConfirm?: string;
    name?: string;
    birthYear?: string;
    birthMonth?: string;
    birthDay?: string;
    phone?: string;
    gender?: string;
  };
}

type SignupFormField = keyof SignupForm;

interface AuthStore {
  // 로그인 모달 관련 상태
  isLoginModalOpen: boolean;
  loginModalType: 'default' | 'expert';
  openLoginModal: () => void;
  openExpertLoginModal: () => void;
  closeLoginModal: () => void;

  // 회원가입 폼 관련 상태
  signupForm: SignupForm;
  setSignupForm: (field: SignupFormField, value: string | boolean) => void;
  setFormError: (field: keyof SignupForm['errors'], message: string | undefined) => void;
  resetSignupForm: () => void;
  checkVerificationNumber: (code: string) => void;
  togglePasswordVisibility: (field: 'password' | 'passwordConfirm') => void;
}

const initialSignupForm: SignupForm = {
  id: '',
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
  openLoginModal: () => set({ isLoginModalOpen: true, loginModalType: 'default' }),
  openExpertLoginModal: () => set({ isLoginModalOpen: true, loginModalType: 'expert' }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),

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

export type { SignupForm, SignupFormField };
export default useAuthStore;
