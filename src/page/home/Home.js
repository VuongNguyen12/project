import Header from"../../components/header/Header"
import Footer from"../../components/footer/Footer"
import Banner1 from "../../components/banner/Banner1"
import Products from "../../components/products/Products"
import { Col, Container, Row } from "reactstrap"
 export default function Home(){
    return(
        <>
        <Header/>
        <Banner1/>
        <Products/>
        <Footer/>
        </>
    )
 }