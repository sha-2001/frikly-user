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
    .modal-header p{
        color: #0F171B;
        font-size: 1rem;
        font-weight: 500;
    }
    .modal-body p{
        color: #73777B;
        font-size: 0.875rem;
        font-weight: 500;
        text-transform : capitalize;
    }
    .modal-footer{
        border-top : none;
    }
    .modal-body input{
        box-shadow : none;
        border-color : #D3D3D3;
    }
    .modal-body input::placeholder{
        color: #73777B;
        font-size: 0.875rem;
        font-weight: 500;
    }
    .modal-header button img{
        width: 1.5rem;
        height: 1.5rem;
    }
    .modal-header button{
        border : none;
    }
    .modal-footer{
        button{
            background-color : #22333B;
            color : white;
        }
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
        height : 16px;
        width : 16px;
    }

    @media (max-width : 1000px){
        display : none;
    }
    @media (max-width : 1300px){
        font-size : 13px;
        .d-flex{
            margin-right : 5%;
            width : 30%;
        }
    }
`
export const HeaderSecondMobileContainer = styled.div`
    display : none;

    .htmc-row1{
        display : flex;
        justify-content : space-between;
        padding-left : 5%;
        padding-right : 5%;
        align-items : center;
        height : 52px;
    }
    .htmc-row2{
        height : 60px;
        display : flex;
        align-items : center;
        justify-content : center;
        
    }  
    .htmc-row2 form{
        height : 62px;
        width : 90%;
        display : flex;
        align-items : center;
        justify-content : center;
    } 
    .htmc-row2 input{
        border: 1px solid #22333B;
        height : 36px;
        border-top-right-radius : 0px;
        border-bottom-right-radius : 0px;
        outline : none;
    }
    .htmc-row2 input:focus,
    .htmc-row2 input:active {
        outline: none;
        box-shadow: none;
    }
    .htmc-row2 button{
        background-color : #22333B;
        height  : 36px;
        width : 36px;
        display : flex;
        justify-content : center;
        align-items : center;
        border-top-left-radius : 0px;
        border-bottom-left-radius : 0px;
    }
    .htmc-row2 button img{
        height : 16px;
        width : 16px;
    }
    .htmc-item1 img{
        height : 24px;
        width : 24px;
    }
    .htmc-item2 img{
        width : 130px;
        height : 40px;
    }
    .htmc-item3 img{
        width : 20px;
        height : 20px;
    }
    .offcanvas-header{
        background: #22333B;
    }

    @media (max-width : 1000px){
        display : block;
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
    text-transform : capitalize;
    font-weight : 400;

   
    .category-main:hover{
        color : #C6AC8F;
    }
    
   
    .mega-menu{
        position : absolute;
        width : 100%;
        height : 50vh;
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

    @media (max-width : 1000px){
            display : none;   
    }

`
export const HardwareContainer = styled.div`
    height : 100%;
    width : 100%;
    display : flex;
    justify-content : space-between;
    color : black;
    text-align : left;

    .sub-category{
        width : 16%;
    }
    .brown{
        background-color : #EAE0D580;
    }
    .white{
        background-color : white;
    }

    p{
        text-align : left;
        font-weight : 500;
        font-size : 14px;
        margin-bottom : 0;
        margin-top : 5px;
        color : #001C30;
        padding-left : 10px;
    }

    li{
        list-style : none;
        color : #797979;
        font-size: 13px;
        font-weight: 400;
        transition : .3s;
        padding : 4px;
        padding-left : 10px;
    }

    li:hover{
        background-color : #22333B33;
        border-left : 5px solid #22333B;
    }

    ul{
        margin : 0;
        padding : 0;
    }
`
export const SanitarywareContainer = styled(HardwareContainer)`
    li{
        margin-bottom : 0px;
    }
`
export const HomeAppliancesContainer = styled(HardwareContainer)`
`
export const LaminatesContainer = styled(HardwareContainer)`
    .shop-by{
        display : flex;
        width : 100%;
    }
    .sub-category{
        width  : 25%;
    }
    .type, .finish{
        width : 50%;
    }
    .laminates-heading{
        text-align : center;
        padding-right: 30%;
        padding-left: 10%;
    }
`