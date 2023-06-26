import styled from "styled-components";

export const HeaderContainer = styled.div`
    height : 23vh;
`
export const HeaderFirstContainer = styled.div`
    height : 6vh;
    background-color : #EAE0D5;
    display : flex;
    padding-left : 5%;
    padding-right : 5%;
    justify-content : space-between;

    .pincode{
        width : 40%;
        height : 100%;
        display : flex;
        gap : 1rem;
        align-items : center;
    }

    .order-tracking
    {
        width : fit-content;
        height : 100%;
        display : flex;
        align-items:center;
        justify-content : flex-end;
    }
        
    .pincode-1{
        color: #22333B;
        font-size: 1rem;
        display: flex;
        flex-wrap : nowrap;
        height : 100%
        align-items : center;
    }
    .pincode-2{
        color: #22333B;
        font-size: 1rem;
        opacity: 0.699999988079071;
        display : flex;
        align-items : center;  
    }
    .pincode img{
        width : 0.875rem;
        height : 1.125rem;
        margin-right : 0.4rem;
    }
    .order-tracking img{
        width : 1.5rem;
        height : 1.5rem;
        margin-right : 0.4rem;
    }
    @media (max-width : 790px){
        .pincode-1, .order-tracking{
            font-size : .8rem;
        }
        .pincode-1 img, .order-tracking img{
            display :none;
        }

        .pincode-2{
            display : none;
        }
        .order-tracking{
            width:40%;
        }
    }
`
export const HeaderSecondContainer = styled.div`
    height : 10vh;
    background-color : white;
    width : 100%;
    padding-left : 4.4%;

    .nav-link{
        font-weight : 500;
        color: #22333B;
    }
    .d-flex{
        margin-right : 7%;
        width : 40%;
    }
    .frikly-logo{
        height : 40px;
        width : 120px;
    }
    .navbar{
        height : 100%;
        background-color : white !important;
    }
    input{
        border-top-right-radius : 0px;
        border-bottom-right-radius : 0px;
    }
    input::placeholder{
        color: #B5B5B5;
        font-size: 0.875rem;
    }
    .form-control:focus {
        box-shadow: none;
        outline: none;
        border-color : #212529;
    }
    button{
        background-color : #22333B;
        display : flex;
        justify-content : center;
        align-items : center;
        border-top-left-radius : 0px;
        border-bottom-left-radius : 0px;
    }
    button:hover{
        background-color : #22333B;
        opacity : 0.8
    }
    .search-icon{
        height : 24px;
        width : 24px;
    }
`
export const HeaderThirdContainer = styled.div`
    height : 7vh;
    background-color : #22333B;
    color : white;
    display : flex;
    justify-content : space-around;
    align-items : center;
    padding-left : 5%;
    padding-right : 5%;
    positon : relative;

    .category-main:hover{
        text-decoration : underline;
    }

    .mega-menu{
        position : absolute;
        width : 100%;
        height : 60vh;
        background-color : white;
        z-index : 3;
        top : 23vh;
        left :0;
        opacity:0;
        transition : .6s;
        visibility: hidden;
        color : #22333B;
    }
    .category-main:hover .mega-menu{
        opacity : 1;
        visibility : visible;
    }

`
export const HardwareContainer = styled.div`
    height : 100%;
    width : 100%;
    display : flex;
    justify-content : space-between;
    color : black;
    text-align : left;

    div{
        width : 16%;
    }

    p{
        text-align : center;
    }

    li{
        list-style : none;
        margin-bottom : 6%;
        color : #797979;
        font-size: .9rem;
        font-weight: 400;
        transition : .3s;
        padding:10px;
    }

    li:hover{
        background-color : #22333B33;
        border-left : 5px solid #22333B;
    }

    ul{
        margin : 0;
        padding : 0;
    }
    .even{
        background-color : white;
    }
    .odd{
        background-color : #EAE0D580;
    }
`