import styles from '../styles/Home.module.css'
import { Image } from 'react-bootstrap';

import React, { useState, useEffect, useContext, useRef } from "react";
function Mainpage(){
  const [updateImage, setUpdateImage] = useState("");
  const [updateImagesec, setUpdateImagesec] = useState("");
  const fileSelectHandler = event => {
    var fileObj = event.target.files[0] || undefined;
    if (fileObj) {
      const pattern = new RegExp('^jpg$|^jpeg$|^png$|^gif$');
      // setShowCrop(true);  
      let type = fileObj.type.replace("image/", '');
      if (pattern.test(type)) {
        // setImageError({ status: false, message: "" });
        var r = new FileReader();
        r.onloadend = function (e) { //callback after files finish loading
          const imgData = e.target.result;
          setUpdateImage(imgData);
        }
        r.readAsDataURL(fileObj);
      } else {
        // setImageError({ status: true, message: "Invalid image to upload." });
      }
    }
  };
  const fileSelectHandlersec = event => {
    var fileObj = event.target.files[0] || undefined;
    if (fileObj) {
      const pattern = new RegExp('^jpg$|^jpeg$|^png$|^gif$');
      // setShowCrop(true);  
      let type = fileObj.type.replace("image/", '');
      if (pattern.test(type)) {
        // setImageError({ status: false, message: "" });
        var r = new FileReader();
        r.onloadend = function (e) { //callback after files finish loading
          const imgData = e.target.result;
          setUpdateImagesec(imgData);
        }
        r.readAsDataURL(fileObj);
      } else {
        // setImageError({ status: true, message: "Invalid image to upload." });
      }
    }
  };
  return(
    <div className='container'>
      <center> 
        <div className={styles.mainheading}>    
          <h1>DR. S. C. VERMA EYE CARE CENTER</h1>
          <h3>Near Shingar Palace, Samrala Road, LUDHIANA - 141 008<br/>
              A UNIT OF DR. S. C. VERMA OPTICAL & CONTACT LENS CLINIC
          </h3>
          {/* <h2>INDOOR RECORDS</h2> */}
        </div>
        <br/>
        <table className={styles.table}>
          <tr>
            <td>Date :</td>
            <td><input type="date" className={styles.tablebox}/></td>
            <td>Name :</td>
            <td><input type="text" className={styles.tablebox}/></td>
            <td>Age :</td>
            <td><input type="text" className={styles.tablebox}/></td>
            <td>Gender :</td>
            <td><input type="text" className={styles.tablebox}/></td>
            {/* <td>Id :</td>
            <td><input type="text" className={styles.tablebox}/></td>
            <td>Photographer :</td>
            <td><input type="text" className={styles.tablebox}/></td> */}
          </tr>
        </table>
        <br/>
        <table className={styles.tabletwo}>
          <tr className={styles.heading}>
            <td>Symptoms:</td>
            <td>Findings:</td>
          </tr>
          <tr className={styles.heading}>
            <td className={styles.seprateborder}><textarea className={styles.textare}/></td>
            <td className={styles.seprateborder}><textarea className={styles.textare}/></td>
          </tr>
        </table>
      </center>
      <br/>
       <table className={styles.tabletwo}>
         <tr>
           <td>Refractometry:</td>
         </tr>
         <tr className={styles.heading}>
            <td className={styles.seprateborder}>
              <table className={styles.intb}>
                <tr>
                  <td rowSpan="2">Right</td>
                  <td>SPH</td>
                  <td>CYL</td>
                  <td>AXIS</td>
                </tr>
                <tr>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                </tr>
                </table>
            </td>
            <td className={styles.seprateborder}>
              <table className={styles.intb}>
                <tr>
                  <td rowSpan="2">Left</td>
                  <td>SPH</td>
                  <td>CYL</td>
                  <td>AXIS</td>
                </tr>
                <tr>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                  <td><input type="text"/></td>
                </tr>
              </table>
            </td>
          </tr>
       </table>
       <br/>
       <center>
        <table className={styles.tabletwo}>
            <tr className={styles.heading}>
              <td>Right Posterlor:</td>
              <td>Left Posterlor:</td>
            </tr>
            <tr className={styles.heading}>
              <td className={styles.sepratebordereye}>
                <div>
                  <Image src={updateImage ? updateImage : "/image/eye.jpg" }  alt="user-image" height="200" width="200"/>
                </div>
               </td>
              <td className={styles.sepratebordereye}>
                <div>
                  <Image src={updateImagesec ? updateImagesec : "/image/eye.jpg" }  alt="user-image" height="200" width="200"/>
                </div>
              </td>
            </tr>
            <tr className={styles.heading}>
              <td><input type="file" accept="image/*" onChange={fileSelectHandler} /></td>
              <td><input type="file" accept="image/*" onChange={fileSelectHandlersec} /></td>
            </tr>
          </table>
          <br/>
          <button className={styles.button}>Save</button>
          <button className={styles.button}>Print</button>
       </center>  
    </div>
  )
}
export default Mainpage