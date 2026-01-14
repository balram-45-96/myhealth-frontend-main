const BASE_API_URL = `${import.meta.env.VITE_BASE_API_URL}`;

export const apis = {
  signin: `${BASE_API_URL}/auth/doctor/login`,
  signup: `${BASE_API_URL}/auth/doctor/register`,
  otp: `${BASE_API_URL}/auth/doctor/verify-otp`,
  uploadDoc: `${BASE_API_URL}/auth/doctor/upload-documents`,
  delete: `${BASE_API_URL}/auth/patient/delete`,
  profile: `${BASE_API_URL}/auth/doctor/profile`,
  specialisations: `${BASE_API_URL}/auth/doctor/specialisation`,
  verifyDoctor: `${BASE_API_URL}/auth/doctor/verify-doctor`,
  rejectDoctor: `${BASE_API_URL}/auth/doctor/reject-doctor`,
};
