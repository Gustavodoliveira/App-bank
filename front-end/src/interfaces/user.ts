export interface IUser {
  image?: any,
  id?: string,
  name: string,
  email: string,
  cpf: string,
  address: string,
  phone: string,
  age: string,
  password: string,
  confirmPassword: string
}

export interface IUserLogin {
  id?: string,
  name: string,
  email: string,
  cpf: string,
  address: string,
  phone: string,
  age: string,
  password: string,
}

export interface userDeposit {
  userId: string,
  Amount: string
}

export interface userPayment {
  AccountName: string,
  value: string,
  id: string,
}

export interface ILoginUser {
  email: string,
  password: string,
}