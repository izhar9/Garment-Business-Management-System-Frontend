export type UserRole = "APP_OWNER" | "OWNER" |"EMPLOYEE";

export interface User {
  userId: string;
  username: string;
  email: string;
  role: UserRole;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  userId: string;
  username: string;
  email: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  expiresIn: number | null;
  isAuthenticated: boolean;
}