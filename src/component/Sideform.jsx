import React from 'react'

const Sideform = () => {
    return (
        <div className='form'>
            <div className="duration">
                <div className="from">
                    <h3>form</h3>
                    <input type="Form" placeholder='date' />
                </div>
                <div className="to">
                    <h3>To</h3>
                    <input type="To" placeholder='To' />
                </div>
            </div>
            <div className="form-details">
                <div>
                    <h3>patient ID</h3>
                    <input type="Patient id" placeholder='patient id' />
                </div>

                <div>
                    <h3>patient Mobile</h3>
                    <input type="Patient id" placeholder='patient id' />
                </div>
                <div>
                    <h3>LAb centre</h3>
                    <input type="Patient id" placeholder='patient id' />
                </div>
                <div>
                    <h3>Department</h3>
                    <input type="Patient id" placeholder='patient id' />
                </div>

                <div>
                    <h3>Status</h3>
                    <input type="Patient id" placeholder='patient id' />
                </div>
            </div>

            <button className='btn'>Search</button>


        </div>
    )
}

export default Sideform
