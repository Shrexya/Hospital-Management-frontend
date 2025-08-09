import React from 'react';
import "./epilepsy.css";
import strokeImage from "./cancer.jpeg";
const Epilepsy = () => {
    return (
        
       <div className='main'>
            <div className='head'>
                 <h1>Cancer</h1>
                 <img src={strokeImage} alt="Stroke illustration"
                 style={{ width: "100%", maxWidth: "100%", height: "900px", display: "block", margin: "20px auto" }} />
            </div>
         
            <div className='report'>
                 <div>

<h4>Cancer is a group of diseases characterized by the uncontrolled growth and spread of abnormal cells. If not treated, it can result in death. Cancer can affect almost any part of the body and is one of the leading causes of death worldwide.</h4>
<h2><b>Causes</b></h2>

<h4>Genetic mutations

Smoking and tobacco use

Alcohol consumption

Obesity

Radiation exposure

Certain viruses (e.g., HPV, Hepatitis B & C)

Environmental pollutants

Family history of cancer
</h4>
<br></br>
<h2><b>Types of Cancer</b></h2>

<h4>There are over 100 types of cancer. Some of the most common include:

Breast Cancer

Lung Cancer

Prostate Cancer

Colorectal Cancer

Skin Cancer (Melanoma and non-melanoma)

Leukemia (cancer of the blood)

Lymphoma (cancer of the lymphatic system)




</h4>
<br></br>
<h2><b>Symptoms</b></h2>

<h4>Symptoms vary depending on the type of cancer, but common signs include:

Unexplained weight loss

Persistent fatigue

Pain

Skin changes

Unusual lumps or swelling

Changes in bowel or bladder habits

Persistent cough or hoarseness


</h4>
<br></br>
<h2><b>Treatment</b></h2>

<h4>Treatment depends on the type and stage of cancer:

Surgery – removing the tumor

Chemotherapy – using drugs to kill cancer cells

Radiation therapy – using high-energy rays to destroy cancer

Immunotherapy – boosting the immune system to fight cancer

Targeted therapy – using drugs that target specific cancer cells

Hormone therapy – for hormone-related cancers (e.g., breast, prostate)


</h4>
<br></br>
<h2><b>Prevention</b></h2>

<h4>While not all cancers can be prevented, risk can be reduced by:

Avoiding tobacco and alcohol

Eating a healthy diet

Exercising regularly

Getting regular cancer screenings

Protecting skin from excessive sun exposure

Vaccination (e.g., HPV vaccine, Hepatitis B vaccine)</h4>


</div>
            </div>
       </div>
       
    );
    
};

export default Epilepsy;
