import React from 'react';
import Department from '../Department/Department';
import './Department.css'

import department1 from '../../../images/departments/pediatric1.jpg';
import department2 from '../../../images/departments/pulmonary.jpg';
import department3  from '../../../images/departments/cardiology3.jpg';
import department4  from '../../../images/departments/x-ray4.jpg';


const departmentsData=[
    {
        img:department1,
        name:"Pediatric",
        details:"Paediatrics is the branch of medicine that involves the medical care of infants, children, and adolescents."

    },
    {
        img:department2,
        name:"Pulmonary",
        details:"Pulmonology is a field of medicine that focuses specifically on diagnosing and treating disorders of the respiratory system."

    },
    {
        img:department3,
        name:"Cardiology",
        details:"Cardiology is the study and treatment of disorders of the heart and the blood vessels."

    },
    {
        img:department4,
        name:"X-ray",
        details:"An X-ray is a quick, painless test that produces images of the structures inside your body"

    }
]
const Departments = () => {
    
    return (
        <div id="departments" className=" container">
            <h2 className="text-primary">Departments</h2>
            <div className="departments">
                {
                    departmentsData.map(department => <Department

                        key = {department.name}
                        department={department}
                    >

                    </Department>)
                }

            </div>
        </div>
         
        

    );
};

export default Departments;