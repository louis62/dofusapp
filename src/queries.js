import { gql } from '@apollo/client/core';

export const SIGN_IN = gql(
    `mutation signin($email: String, $password: String){
        login(email:$email, password:$password){
            token
        }
    }`
)