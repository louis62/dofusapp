import gql from 'graphql-tag';

export const SIGN_IN = gql`
mutation signin($email: String, $password: String){
    login(email:$email, password:$password){
        token
    }
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
