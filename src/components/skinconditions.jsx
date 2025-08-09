import React from 'react';
import "./epilepsy.css";
import strokeImage from "./skin.jpeg";
const Epilepsy = () => {
    return (
        
       <div className='main'>
            <div className='head'>
                 <h1>Skin disease</h1>
                 <img src={strokeImage} alt="Stroke illustration"
                 style={{ width: "100%", maxWidth: "100%", height: "900px", display: "block", margin: "20px auto" }} />
            </div>
         
            <div className='report'>
                 <div>

<h4>Skin diseases encompass a wide range of conditions that affect the skin, the body’s largest organ. These diseases can be temporary or chronic, painless or painful, and mild or life-threatening. They may arise due to infections, allergic reactions, genetic factors, or environmental exposure. Early detection and proper management are key to controlling most skin conditions effectively.</h4>
<br></br>
<h2><b>Causes</b></h2>

<h4>Several risk factors increase the likelihood of Skin disease, including:

Genetics: Family history can predispose individuals to conditions like psoriasis or eczema.

Environmental Factors: Pollution, climate, and allergens can trigger flare-ups.

Lifestyle Factors: Poor hygiene, diet, stress, and lack of sleep can worsen certain skin conditions.

Infections: Spread through contact, contaminated surfaces, or poor hygiene.

Immunological Factors: Autoimmune responses or a weakened immune system can lead to various skin disorders.
</h4>
<br></br>
<h2><b>Types of Skin disease</b></h2>

<h4>There are many types of skin diseases:

Infectious Skin Diseases: Caused by bacteria (impetigo, cellulitis), viruses (herpes simplex, warts), fungi (ringworm, athlete’s foot), or parasites (scabies).

Inflammatory Skin Diseases: Include conditions like eczema, psoriasis, and dermatitis, often linked to immune system dysfunction.

Allergic Skin Diseases: Triggered by allergens such as food, medications, or contact with substances like latex or metals (contact dermatitis).

Autoimmune Skin Diseases: Conditions like lupus or vitiligo where the immune system attacks healthy skin cells.

Skin Cancers: Includes melanoma, basal cell carcinoma, and squamous cell carcinoma, often caused by prolonged sun exposure or tanning beds.
</h4>
<br></br>
<h2><b>Symptoms</b></h2>

<h4>Redness, swelling, or inflammation

Rashes, itching, or burning sensations

Dry, scaly, or cracked skin

Blisters, sores, or ulcers

Discoloration or pigmentation changes
</h4>
<br></br>
<h2><b>Treatment</b></h2>

<h4>opical Medications: Creams, ointments, or gels for localized issues.

Oral Medications: Antibiotics, antihistamines, or immune modulators.

Phototherapy: Controlled UV light treatment for chronic conditions like psoriasis.

Lifestyle Adjustments: Diet, hygiene, and stress management.

Surgical Options: For removal of cysts, warts, or cancerous lesions.
</h4>
<br></br>
<h2><b>Prevention</b></h2>

<h4>Preventing a skin disease often involves lifestyle changes and managing existing health conditions:

Regular skin care and hygiene

Use of sunscreen and protective clothing

Avoiding known allergens or irritants

Healthy diet and hydration

Routine dermatological check-ups</h4>


</div>
            </div>
       </div>
       
    );
    
};

export default Epilepsy;
