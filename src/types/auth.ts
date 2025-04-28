
export interface AuthResponse {
  user?: {
    id: string;
    email: string;
    role: "user" | "admin";
  };
  error?: string;
}
