import React from 'react';
import "./epilepsy.css";
import strokeImage from "./stroke.jpeg";
const Epilepsy = () => {
    return (
        
       <div className='main'>
            <div className='head'>
                 <h1>Stroke</h1>
                 <img src={strokeImage} alt="Stroke illustration"
                 style={{ width: "100%", maxWidth: "100%", height: "900px", display: "block", margin: "20px auto" }} />
            </div>
         
            <div className='report'>
                 <div>

<h4>A stroke is a medical emergency that occurs when the blood supply to part of the brain is interrupted or reduced, preventing brain tissue from getting oxygen and nutrients. Within minutes, brain cells begin to die. Stroke is a leading cause of death and long-term disability worldwide. Immediate treatment is crucial to minimize brain damage and improve recovery outcomes.</h4>
<br></br>
<h2><b>Causes</b></h2>

<h4>Several risk factors increase the likelihood of stroke, including:

Modifiable Risk Factors:
High blood pressure (hypertension)

Diabetes

Smoking

High cholesterol

Obesity and physical inactivity

Excessive alcohol consumption

Heart diseases (e.g., atrial fibrillation)

Non-Modifiable Risk Factors:
Age (risk increases with age)

Family history of stroke

Gender (men have a higher risk, but women have worse outcomes)

Race and ethnicity (higher risk in African-American and South Asian populations)
</h4>
<br></br>
<h2><b>Types of Strokes</b></h2>

<h4>There are three main types of strokes:

1. Ischemic Stroke
Cause: A blockage in a blood vessel supplying blood to the brain.

Percentage: Accounts for about 87% of all strokes.

Types:

Thrombotic stroke: Caused by a blood clot (thrombus) forming in the brain’s blood vessels.

Embolic stroke: Caused by a clot or debris that forms elsewhere in the body and travels to the brain.

2. Hemorrhagic Stroke
Cause: A blood vessel in the brain bursts, leading to bleeding (hemorrhage).

Common causes: High blood pressure, aneurysms, trauma.

Types:

Intracerebral hemorrhage: Bleeding within the brain.

Subarachnoid hemorrhage: Bleeding in the space between the brain and the surrounding membrane.

3. Transient Ischemic Attack (TIA)
Also known as a "mini-stroke", it’s a temporary blockage of blood flow to the brain.

Symptoms are similar to a stroke but last only a few minutes to hours and do not cause permanent damage.

A warning sign for potential future strokes.
</h4>
<br></br>
<h2><b>Diagnosis</b></h2>

<h4>CT Scan or MRI: To determine stroke type and location.

Blood tests: To check for clotting or underlying conditions.

Carotid ultrasound and echocardiogram: To identify the source of clots.
</h4>
<br></br>
<h2><b>Treatment</b></h2>

<h4>For Ischemic Stroke:
Clot-busting drugs (e.g., tPA): Must be given within a few hours.

Mechanical thrombectomy: Physically removing the clot from a blood vessel.

For Hemorrhagic Stroke:
Controlling bleeding and lowering pressure in the brain.

Surgery may be needed to repair damaged blood vessels or remove accumulated blood.

Rehabilitation:
Involves physical therapy, occupational therapy, speech therapy, and psychological support.

Aims to help patients regain independence and improve quality of life.
</h4>
<br></br>
<h2><b>Prevention</b></h2>

<h4>Preventing a stroke often involves lifestyle changes and managing existing health conditions:

Control blood pressure and diabetes

Eat a healthy, balanced diet

Exercise regularly

Quit smoking

Limit alcohol intake

Take prescribed medications as directed</h4>


</div>
            </div>
       </div>
       
    );
    
};

export default Epilepsy;
