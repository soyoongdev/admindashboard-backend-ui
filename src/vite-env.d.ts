/// <reference types="vite/client" />
import { LucideIcon } from 'lucide-react'

/* type */
export type SidebarRoute = {
  path: string
  name: string
  icon: LucideIcon
  component: () => JSX.Element
  layout: string
}

/* interface */

export interface Company {
  companyID: number
  name: string
  address: string
  createdAt: string
  updatedAt: string
  orderNumber: number
  img: string
  description: string
}

export interface User {
  userID: number
  roleID: number
  resumeID: number
  username: string
  password: string
  fullName: string
  email: string
  address: string
  avatar: string
  birthDate: string
  sex: number
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface Role {
  roleID: number
  title: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface Level {
  levelID: number
  title: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface Job {
  jobID: number
  levelID: string
  companyID: string
  name: string
  salary: number[]
  status: number
  jobDescription: string
  skillRequired: string[]
  quantity: number
  address: string
  createdAt: string
  updatedAt: string
  orderNumber: number
}

export interface Resume {
  resumeID: number
  userID: number
  jobID: number
  createdAt: string
  updatedAt: string
  orderNumber: number
}
