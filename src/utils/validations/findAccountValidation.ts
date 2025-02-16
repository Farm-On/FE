export type ValidationResult = {
  isValid: boolean;
  message?: string;
};

export const validateEmail = (email: string): ValidationResult => {
  if (!email.trim()) {
    return { isValid: false, message: '이메일을 입력해주세요.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, message: '유효한 이메일 형식이 아닙니다.' };
  }

  return { isValid: true };
};

export const validatePhone = (phone1: string, phone2: string, phone3: string): ValidationResult => {
  if (!phone1 || !phone2 || !phone3) {
    return { isValid: false, message: '휴대폰 번호를 입력해주세요.' };
  }

  const phoneRegex = {
    first: /^01[016789]$/,
    middle: /^\d{4}$/,
    last: /^\d{4}$/,
  };

  if (!phoneRegex.first.test(phone1)) {
    return { isValid: false, message: '올바른 휴대폰 번호를 입력해주세요.' };
  }

  if (!phoneRegex.middle.test(phone2)) {
    return { isValid: false, message: '올바른 휴대폰 번호를 입력해주세요.' };
  }

  if (!phoneRegex.last.test(phone3)) {
    return { isValid: false, message: '올바른 휴대폰 번호를 입력해주세요.' };
  }

  return { isValid: true };
};
