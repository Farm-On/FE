export type ValidationResult = {
  isValid: boolean;
  message?: string;
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      message: '이메일을 올바르게 입력해주세요.',
    };
  }

  return { isValid: true };
};

export const validatePassword = (password: string): ValidationResult => {
  if (!password.trim()) {
    return { isValid: false };
  }

  if (password.length < 8) {
    return {
      isValid: false,
      message: '비밀번호를 올바르게 입력해주세요.',
    };
  }

  return { isValid: true };
};
