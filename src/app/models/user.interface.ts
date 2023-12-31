export interface User {
  id: number;
  email: string;
  password: string;
}

export interface UserPostDTO {
  email: string;
  password: string;
}
