import styled from "styled-components";

export const HeaderContainer = styled.div`
    height : 23vh;
`
export const SidebarContainer = styled.div`
    .sidebar-header{
        height : 17vh;
        margin-bottom : 1.5rem;
    }
    .logo-portion{
        height : 45%;
        background: #22333B;
        box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.25);
    }
    .logo-portion img{
        width: 50%;
        height: 75%;
    }
    .cheapest-quote{
        height : 55%;
        background: #EAE0D5;
    }
    .img-container{
        border-radius: 2.8125rem;
        background: #FFF;
        width: 2.8125rem;
        height: 2.8125rem;
        display : flex;
        justify-content : center;
        align-items : center;
    }
    .cheapest-quote .col-7{
        display : flex;
        align-items : flex-start;
        flex-direction : column;
        justify-content: center;
    }
    .cheapest-quote-text1{
        color: #0A0908;
        font-size: 1rem;
        font-weight: 600;
        text-align : left;
        margin-bottom : 0;
    }
    .cheapest-quote-text2{
        color: #22333B;
        font-size: 0.75rem;
        font-weight: 500;
        opacity: 0.699999988079071;
        text-align : left;
        margin-bottom : 0;
    }
    .sidebar-home{
        hight : fit-content;
    }
    .sidebar-home .row{
        height : 2.375rem;
    }
    .home-text{
        text-align : left;
        color: #22333B;
        font-size: 1rem;
        font-weight: 500;
    }
    .home-section1{
        height : 11.5rem;
        border-bottom: 1px solid rgba(34, 51, 59, 0.80);
        background: #FFF;
        display : flex;
        flex-direction : column;
        row-gap : 1.2rem;
    }
    .home-section2{
        height : 8.75rem;
        border-bottom: 1px solid rgba(34, 51, 59, 0.80);
        background: #FFF;
        display : flex;
        flex-direction : column;
        row-gap : 1.2rem;
        padding-top : 1rem;
    }
    .home-section3{
        height : 8.75rem;
        border-bottom: 1px solid rgba(34, 51, 59, 0.80);
        background: #FFF;
        display : flex;
        flex-direction : column;
        row-gap : 1.2rem;
        padding-top : 1rem;
    }
    .home-section4{
        height : 12.8rem;
        display : flex;
        flex-direction : column;
        row-gap : 1.2rem;
        padding-top : 1rem;
    }
    .sidebar-signin{
        display : flex;
        justify-content : center;
    }
    .sidebar-signin button{
        width: 12.96569rem;
        height: 2.95025rem;
        border-radius: 0.25rem;
        background: #EAE0D5;
        border : none;
    }
`
export const HeaderFirstContainer = styled.div`
    height : 6vh;
    background-color : #EAE0D5;
    display : flex;
    padding-left : 5.9%;
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
        font-weight : 500;
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
    .order-tracking {
        color: #22333B;
        font-size: 1rem;
        font-weight : 500;
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
    padding-left : 4.6%;

    .nav-link{
        font-weight : 600;
        color: #001C30;
    }
    .d-flex{
        margin-right : 7%;
        width : 40%;
    }
    .d-flex button{
        width : 3rem;
    }
    .frikly-logo{
        height : 40px;
        width : 140px;
    }
    .navbar{
        height : 100%;
        background-color : white !important;
    }
    input{
        border-top-right-radius : 0px;
        border-bottom-right-radius : 0px;
        height : 3rem;
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
    .ccwa{
        margin-right : 4.5%;
    }
    .wishlist a, .account a, .cart a{
        color: #001C30;
        font-size: 0.75rem;
        font-weight: 600;
    }
    .catalogue img{
        width: 1.5rem;
        height: 1.4rem;
    }
    .catalogue a{
        color: #001C30;
        font-size: 0.75rem;
        font-weight: 600;
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