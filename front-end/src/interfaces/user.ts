export interface IUser {
  name: string,
  email: string,
  cpf: string,
  address: string,
  phone: string,
  age: string,
  password: string,
  confirmPassword: string
}

export interface ILoginUser {
  email: string,
  password: string,
}