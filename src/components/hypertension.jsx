import React from 'react';
import "./epilepsy.css";
import strokeImage from "./hypertension.jpeg";
const Epilepsy = () => {
    return (
        
       <div className='main'>
            <div className='head'>
                 <h1>Hypertension</h1>
                 <img src={strokeImage} alt="Stroke illustration"
                 style={{ width: "100%", maxWidth: "100%", height: "900px", display: "block", margin: "20px auto" }} />
            </div>
         
            <div className='report'>
                 <div>

<h4>Hypertension, commonly known as high blood pressure, is a chronic medical condition where the force of the blood against the artery walls is consistently too high. It is often called the "silent killer" because it may not show obvious symptoms but can lead to serious health issues if left untreated.</h4>

<h2><b>Causes</b></h2>

<h4>Genetics / Family history

Obesity

Lack of physical activity

High salt intake

Alcohol consumption

Stress

Smoking

Chronic kidney disease

Age (risk increases with age)
</h4>
<br></br>
<h2><b>Diagnosis</b></h2>

<h4>

Hypertension is diagnosed through:

Regular blood pressure measurements

24-hour ambulatory blood pressure monitoring (ABPM)

Blood and urine tests (to detect underlying conditions)

ECG or echocardiogram (to check for heart problems)


</h4>
<br></br>
<h2><b>Symptoms</b></h2>

<h4>Hypertension often has no symptoms, but when they occur, they may include:

Headaches

Dizziness

Shortness of breath

Nosebleeds

Chest pain

Vision problems
</h4>
<br></br>
<h2><b>Treatment</b></h2>

<h4>Lifestyle changes:

Eat a low-sodium, heart-healthy diet (e.g., DASH diet)

Exercise regularly

Maintain a healthy weight

Limit alcohol and quit smoking

Manage stress

Medications:

Diuretics

ACE inhibitors

Beta-blockers

Calcium channel blockers

ARBs (angiotensin II receptor blockers)


</h4>
<br></br>
<h2><b>Prevention</b></h2>

<h4>While not all cancers can be prevented, risk can be reduced by:

Regular check-ups

Healthy diet

Physical activity

Avoiding smoking and alcohol

Weight management

Stress reduction</h4>


</div>
            </div>
       </div>
       
    );
    
};

export default Epilepsy;
