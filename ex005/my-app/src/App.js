import './App.css';
import Box from './component/Box';


function App() {
  const des1 = "ข้าวผัดไข่ใช้วัตถุดิบไม่มากแต่อร่อยจนหยุดไม่ได้วิธีทำข้าวผัดไข่ให้หอมอร่อย เริ่มจากนำกระเทียมซอยลงไปเจียวให้หอม ตอกไข่ยีให้แตก เมื่อไข่เริ่มสุกให้ใส่ข้าวสวยลงไป ปรุงรสตามต้องการ โรยต้นหอมซอยตามสูตรข้าวผัดไข่เพิ่มความหอม ผัดต่อให้เข้ากัน แค่นี้ก็ได้เมนูง่ายๆ ได้ประโยชน์จากสารอาหารเต็มๆ คำ";
  const des2 = "บัวลอยชาววัง อีกหนึ่งเมนูขนมไทยโบราณที่อยู่คู่กับคนไทยมาอย่างยาวนาน ไม่ว่าจะเทศกาลไหน บัวลอยจะเป็นอีกหนึ่งเมนูที่อยู่ในสำรับอาหารเสมอ ไม่ว่าจะเป็นการทำบุญเลี้ยงพระ งานมงคล และงานพิธีการต่าง ๆ  ด้วยความที่บัวลอยนั้นใช้วัตถุดิบในการทำที่ง่าย แต่ต้องใช้พิถีพิถันในเรื่องรสชาติ สีสัน ความสวยงาม กลิ่นหอม และรูปลักษณะ ทำให้บัวลอยเป็นขนมอีกหนึ่งชนิดที่ชวนรับประทาน";
  const des3 = "ชาไทย โดยต้นตำหรับเป็นเครื่องดื่มเย็นดับร้อนที่ชงโดยใช้ชาซีลอน แต่เนื่องจากชาซีลอนมีราคาสูง หลายแห่งจึงมักใช้ใบเมี่ยงผสมสีอาหารแทน หรือเป็นผงของชาซีลอนที่มีคุณภาพไม่สูงนักโดยวัตถุดิบที่สำคัญและเป็นเอกลักษณ์ของชาไทยคือ ใบชา และ นมข้นหวานหรือน้ำตาล หลังจากชงด้วยน้ำร้อนแล้วจึงนำไปเทใส่แก้วหรือถุงที่มีน้ำแข็ง หรือนำไปแช่เย็นไว้ดื่มภายหลัง"
  
  return (
    <div class="app">
      <center><h1>โหวตอาหาร</h1></center>
      <div class="main">
        <Box group="อาหารคาว" title="ข้าวผัด" imgURL="https://krua.co/wp-content/uploads/2020/09/RT1569_ImageBannerMobile_960x633_New_-01.jpg" des={des1}/>
        <Box group="อาหารหวาน" title="บัวลอย" imgURL="https://img.kapook.com/u/2022/wanwanat/1079595941.jpg" des={des2}/>
        <Box group="เครื่องดื่ม" title="ชาไทย" imgURL="https://img.pptvhd36.com/health/thumbor/2023/02/23/ba21527.jpg" des={des3}/>
      </div>
    </div>
  );
}

export default App;
