import { useState } from 'react'
import VideoItem from './components/VideoItem'
import AttributeColor from './components/Basic1'
import { FaShoppingCart, FaHeart,FaCanadianMapleLeaf,FaCheckSquare,FaPhoneSquareAlt,FaCaretDown } from 'react-icons/fa'
import {BsShieldFillCheck } from 'react-icons/bs'
import {HiReceiptRefund } from 'react-icons/hi'
import ListItem from './components/Basic2'
import Buttons from './components/Basic3' 
import Navigation from './components/Basic6' 
import NobelList from './components/Basic7' 
import ProductsList from './components/Productlist'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VideoItem thumb='./images/video-1.png' title='React: The Documentary' desc='The origin story of React' icon={<FaHeart/>} />
    <VideoItem thumb='./images/video-2.png' title='Rethinking Best Practices' desc='Pete Hunt (2023)'icon={<FaHeart/>} />
    <VideoItem thumb='./images/video-3.png' title='Introducing React Native' desc='Tom Occhino (2015)'icon={<FaHeart/>} />
    <AttributeColor/>
    <ListItem icon={<FaCheckSquare/>} title='Bộ sản phẩm gồm:' desc='Hộp,Sách hướng dẫn,Cáp,Cây lấy sim'/>
    <ListItem icon={<BsShieldFillCheck/>} title='Bảo hành:' desc='Chính hãng 12 tháng'/>
    <ListItem icon={<HiReceiptRefund/>} title='Đổi trả:' desc='Hư gì đổi nấy 12 tháng'/>
    <Buttons icon={<FaShoppingCart/>} label='Thêm vào giỏ hàng'/>
    <Buttons icon={<FaPhoneSquareAlt/>} type='dark' label='Gọi tư vấn'/>
    <Navigation/>  
    <NobelList name='Maria Sklodowska-Curie' thumb='./images/Katsuko_Saruhashi.png'  desc_1='physicist and chemist'  desc_2=' 4 (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)'  desc_3='polonium (element)'/>
    <ProductsList/>
  </>
  )
}

export default App
