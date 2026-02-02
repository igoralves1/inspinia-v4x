
export type MemberRoleType = {
    id: number
    title: string
    description: string
    icon: string
    features: string[]
    users: string[]
    updatedTime: string
}

export type UserType = {
    id: string
    name: string
    email: string
    avatar: string
    role: string
    date: string
    time: string
    status: 'inactive' | 'active' | 'suspended'
    selected?: boolean
}
