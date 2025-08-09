import React from 'react';
import "./epilepsy.css";
import strokeImage from "./diabetes.jpeg";
const Epilepsy = () => {
    return (
        
       <div className='main'>
            <div className='head'>
                 <h1>Diabetes</h1>
                 <img src={strokeImage} alt="Stroke illustration"
                 style={{ width: "100%", maxWidth: "100%", height: "900px", display: "block", margin: "20px auto" }} />
            </div>
         
            <div className='report'>
                 <div>

<h4>Diabetes mellitus, commonly referred to as diabetes, is a chronic metabolic disorder characterized by high levels of glucose (sugar) in the blood. It occurs either when the pancreas does not produce enough insulin or when the body cannot effectively use the insulin it produces.</h4>
<h2><b>Causes</b></h2>

<h4>Genetics

Obesity

Sedentary lifestyle

Poor diet

Age (risk increases with age)

Family history of diabetes
</h4>
<br></br>
<h2><b>Types of Diabetes</b></h2>

<h4>There are many types of Diabetes:

Type 1 Diabetes

An autoimmune condition where the body attacks insulin-producing cells in the pancreas.

Usually develops in childhood or adolescence.

Requires lifelong insulin therapy.

Type 2 Diabetes

The most common form.

Typically develops in adults, often due to lifestyle factors like obesity and lack of exercise.

Can often be managed with diet, exercise, and oral medications.

Gestational Diabetes

Occurs during pregnancy.

Usually temporary but increases the risk of developing Type 2 diabetes later in life.

Other Types

Includes monogenic diabetes and diabetes secondary to other diseases or medications.


</h4>
<br></br>
<h2><b>Symptoms</b></h2>

<h4>Frequent urination

Excessive thirst

Unexplained weight loss

Fatigue

Blurred vision

Slow healing of wounds
</h4>
<br></br>
<h2><b>Treatment</b></h2>

<h4>Lifestyle changes (diet, exercise)

Medication (oral antidiabetics, insulin)

Monitoring blood sugar levels

Regular medical check-ups


</h4>
<br></br>
<h2><b>Prevention</b></h2>

<h4>While Type 1 diabetes cannot be prevented, Type 2 diabetes can often be delayed or prevented through:

Healthy eating

Regular physical activity

Weight management

Routine health screenings</h4>


</div>
            </div>
       </div>
       
    );
    
};

export default Epilepsy;
