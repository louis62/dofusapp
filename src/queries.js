import gql from 'graphql-tag';

export const SIGN_IN = gql`
mutation signin($email: String, $password: String){
    login(email:$email, password:$password){
        token
        user {
            name
            email
        }
    }
}
`

export const SIGN_UP = gql`
mutation signup($name: String, $email: String, $password: String){
    signup(name: $name, email:$email, password:$password){
        token
        user {
            name
            email
        }
    }
}
`

export const SIGN_OUT = gql`
mutation signout{
    logout
}
`


export const ME = gql`
query getMyInfos{
    me{
        id
        name
        dragos{
            name
        }
    }
}
`
