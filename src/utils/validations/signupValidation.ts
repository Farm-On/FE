export type ValidationResult = {
  isValid: boolean;
  message?: string;
};

interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
  name: string;
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  phone1: string;
  phone2: string;
  phone3: string;
  gender: string;
}

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

export const validatePassword = (value: string): ValidationResult => {
  if (!value) {
    return { isValid: false, message: '비밀번호를 입력해주세요.' };
  }
  if (value.length < 8) {
    return { isValid: false, message: '비밀번호는 8자 이상이어야 합니다.' };
  }
  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
    return { isValid: false, message: '비밀번호는 영문과 숫자를 포함해야 합니다.' };
  }
  return { isValid: true };
};

export const validatePasswordConfirm = (
  password: string,
  passwordConfirm: string
): ValidationResult => {
  if (!passwordConfirm) {
    return { isValid: false, message: '비밀번호를 다시 입력해주세요.' };
  }
  if (password !== passwordConfirm) {
    return { isValid: false, message: '비밀번호가 일치하지 않습니다.' };
  }
  return { isValid: true };
};

export const validateName = (value: string): ValidationResult => {
  if (!value.trim()) {
    return { isValid: false, message: '이름을 입력해주세요.' };
  }
  if (!/^[가-힣]{2,}$/.test(value)) {
    return { isValid: false, message: '이름은 한글로 2자 이상 입력해주세요.' };
  }
  return { isValid: true };
};

export const validateBirth = (year: string, month: string, day: string): ValidationResult => {
  if (!year || !month || !day) {
    return { isValid: false, message: '생년월일을 입력해주세요.' };
  }

  const currentYear = new Date().getFullYear();
  const yearNum = parseInt(year, 10);
  const monthNum = parseInt(month, 10);
  const dayNum = parseInt(day, 10);

  if (isNaN(yearNum) || yearNum < 1900 || yearNum > currentYear) {
    return { isValid: false, message: '올바른 연도를 입력해주세요.' };
  }

  if (isNaN(monthNum) || monthNum < 1 || monthNum > 12) {
    return { isValid: false, message: '올바른 월을 입력해주세요.' };
  }

  const lastDayOfMonth = new Date(yearNum, monthNum, 0).getDate();
  if (isNaN(dayNum) || dayNum < 1 || dayNum > lastDayOfMonth) {
    return { isValid: false, message: '올바른 일을 입력해주세요.' };
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

export const validateForm = (form: SignupFormData): Record<string, ValidationResult> => {
  return {
    email: validateEmail(form.email),
    password: validatePassword(form.password),
    passwordConfirm: validatePasswordConfirm(form.password, form.passwordConfirm),
    name: validateName(form.name),
    birth: validateBirth(form.birthYear, form.birthMonth, form.birthDay),
    phone: validatePhone(form.phone1, form.phone2, form.phone3),
    gender: {
      isValid: !!form.gender,
      message: !form.gender ? '성별을 선택해주세요.' : undefined,
    },
  };
};

export const isFormValid = (validationResults: Record<string, ValidationResult>): boolean => {
  return Object.values(validationResults).every((result) => result.isValid);
};
