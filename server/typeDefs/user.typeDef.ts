const userTypeDef = `#graphql
type User {
    _id: ID!
    username: String!
    name: String!
    password: String!
    profilePicture: String
    gender: String!
}

type Query {
    users: [User!]
    authUser: User
    user(userId:ID!): User
}

type Mutation {
    signUp(input: SingUpInput!): User
    login(input: LoginInput!): User
    logout: LogoutResponse
}

input SignUpInput {
    usename: String!
    name: String!
    password: String!
    gender: String!
}

input LoginInput {
    usename: String!
    password: String!
}

type LogoutResponse {
    message: String!
}

`;
