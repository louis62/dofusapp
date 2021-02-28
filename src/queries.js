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

export const CREATE_ONE_DRAGOTURKEY = gql`
mutation createOneDragoTurkey($data: DragoTurkeyCreateInput!){
    createOneDragoTurkey(data: $data){
        name,
        type {
            name
        }
    }
}
`

export const UPDATE_ONE_DRAGOTURKEY = gql`
mutation updateOneDragoTurkey($data: DragoTurkeyUpdateInput! $where: DragoTurkeyWhereUniqueInput!){
    updateOneDragoTurkey(data: $data, where: $where){
        name
        gender
        type {
            name
            imageName
        }
        fecund
        pregnant
        behaviour
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

export const GET_MY_DRAGOS = gql`
query getMyDragos($where: DragoTurkeyWhereInput){
    userDragos(where:$where){
        id
        name
        gender
        type {
            name
            imageName
        }
    }
}
`

export const GET_ONE_DRAGO = gql`
query getOneDragos($id: Int!){
    dragoTurkey(id: $id){
        id
        name
        gender
        type {
            name
            imageName
        }
        fecund
        pregnant
        behaviour
        storage
        city
        object
    }
}
`


export const GET_DRAGOTYPES = gql`
query getDragotypes{
    dragoTypes{
        name
        imageName
    }
}
`