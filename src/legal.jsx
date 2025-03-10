import { useState } from 'react'
import './legal.css'

function Legal() {
    return(
        <>
        <footer className='legal'>
            <h4 className='disclamer'>DISCLAIMER: Information Accuracy and Updates</h4>
            <p className='disclamer_content'>
            The software portal relies and captures information gathered from various sources such as other departments of the Institute, data derived from documents received from both departments and end users. It is important to note that while efforts are made to ensure the accuracy and reliability of the information presented, discrepancies and errors may inadvertently occur. The Institute shall not be held responsible for any unintended inaccuracies or misinterpretations that might arise from the utilization of this data.
            </p>
            <br></br>
            <p className='disclamer_content'>
                Should you encounter any information that you believe to be incorrect or outdated, we encourage you to promptly notify us by writing to itsupport.mahe@manipal.edu with a screenshot of the relevant information and any supporting details that can aid us in verifying and rectifying the data. Your cooperation in helping us maintain the accuracy and integrity of the information is greatly appreciated. Please bear in mind that the Institute reserves the right to update, modify, or revise the information on this portal at any time without prior notice. Your understanding and collaboration in this regard are valued as we strive to provide the best possible information resource.
            </p>
            <br></br>
            <p className='disclamer_content'>
            Thank you for using this software portal responsibly and for your assistance in enhancing the quality of the information provided.
            </p>
            <br></br>

            <h6 className='bottom_disc'>©2017 Manipal Academy of Higher Education, manipal.edu, Madhav Nagar, Manipal-576104, Karnataka. </h6>
        </footer>
        </>
  
    )

}
export  default Legal