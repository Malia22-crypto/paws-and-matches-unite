
import { toast } from '@/components/ui/use-toast';

// Types for authentication
export interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface User {
  id?: string;
  name: string;
  email: string;
}

// Mock user storage - in a real app, this would be handled by a backend
const USERS_STORAGE_KEY = 'pet_app_users';

const getStoredUsers = (): Record<string, User> => {
  const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
  return storedUsers ? JSON.parse(storedUsers) : {};
};

const saveUsers = (users: Record<string, User>) => {
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

// Auth service functions
export const register = async (credentials: RegisterCredentials): Promise<User> => {
  // In a real app, this would call your API
  console.log('Registering user:', credentials);
  
  // For demo, simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if email is already in use
  const users = getStoredUsers();
  if (users[credentials.email]) {
    throw new Error('Email already in use');
  }
  
  // Create new user (without storing password securely - just for demo)
  const newUser: User = {
    id: Date.now().toString(),
    name: credentials.name,
    email: credentials.email
  };
  
  // Store user
  users[credentials.email] = newUser;
  saveUsers(users);
  
  return newUser;
};

export const login = async (credentials: LoginCredentials): Promise<User> => {
  // For demo purposes only - in a real app, authentication would be handled securely by a backend
  console.log('Logging in user:', credentials);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Check if user exists (this is NOT secure, just for demo)
  const users = getStoredUsers();
  const user = users[credentials.email];
  
  if (!user) {
    throw new Error('Invalid email or password');
  }
  
  // In a real app, we would verify the password here
  
  return user;
};

// Current user management
export const getCurrentUser = (): User | null => {
  const userJson = localStorage.getItem('currentUser');
  return userJson ? JSON.parse(userJson) : null;
};

export const setCurrentUser = (user: User | null) => {
  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }
};

export const logout = () => {
  localStorage.removeItem('currentUser');
  toast({
    title: "Logged out",
    description: "You have been successfully logged out."
  });
};
