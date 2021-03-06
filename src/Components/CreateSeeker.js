import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import URL from '../apiConfig';

const blankData = {
    skills: '',
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    availability: "",
    payrate_desired: 0
}
function CreateSeeker({ userInfo }) {
    const navigate = useNavigate()
    const [postData, setPostData] = useState(blankData)
    const [success, setSuccess] = useState(false)
    function handleChange(ev) {
        setPostData({ ...postData, [ev.target.id]: ev.target.value})
    } 
    function toggleChange(ev) {
        setPostData({ ...postData, [ev.target.id]: !postData[ev.target.id]})
    }
    const postSeeker = async () => {
        try {
            const response = await axios.post(`${URL}LFWork/`, postData, {
                headers: {
                    Authorization: `Token ${localStorage.getItem('token')}`
                }
            })
            if (response.status === 201) {
                setSuccess(true)
                setTimeout(() => {
                navigate(`/lfw/${response.data.id}`)
                }, 5000)
            }
        } catch (error) {}}
    return (
			<div className='create-wrapper'>
				<form className='seeker-card-wrapper'>
					<div className='seeker-card'>
                        <div className='seeker-detail'>
                            <div className='item'>
                                <label className='label'>Username:</label>
                                <p className='value'>{userInfo.username}</p>
                            </div>
                            <div className='item'>
                                <label className='label'>Email:</label>
                                <p className='value'>{userInfo.email}</p>
                            </div>
                        </div>
                        <div className='work-info'>
                            <div className='item'>
							    <label      className='label'>Skills:</label>
							    <input
								    className='edit'
								    type='text'
								    id='skills'
								    onChange={handleChange}></input>
						    </div>
                            <div className='item'>
							    <label className='label'>Availability:</label>
							    <div className='days value-edit'>
								    <p
									onClick={toggleChange}
									id='sunday'
									className={postData.sunday ? 'green' : 'gray'}>
									Sun
								    </p>
								    <p
									onClick={toggleChange}
									id='monday'
									className={postData.monday ? 'green' : 'gray'}>
									Mon
								    </p>
								    <p
									onClick={toggleChange}
									id='tuesday'
									className={postData.tuesday ? 'green' : 'gray'}>
									Tue
								    </p>
								    <p
									onClick={toggleChange}
									id='wednesday'
									className={postData.wednesday ? 'green' : 'gray'}>
									Wed
								    </p>
								    <p
									onClick={toggleChange}
									id='thursday'
									className={postData.thursday ? 'green' : 'gray'}>
									Thu
								    </p>
								    <p
									onClick={toggleChange}
									id='friday'
									className={postData.friday ? 'green' : 'gray'}>
									Fri
								    </p>
								    <p
									onClick={toggleChange}
									id='saturday'
									className={postData.saturday ? 'green' : 'gray'}>
									Sat
								</p>
							</div>
                            <div className='item'>
                                <label className='label'>Pay Rate:</label>
                                <input className='edit'
							        type='number'
							        onChange={handleChange}
							        id='payrate_desired'></input>
                             </div>
                        </div>
					</div>			
				</div>
            </form>
			{success ? (
				<p className='success'>
					Your Seeker has been created successfully. Redirecting you to your Seeker.
	    		</p>
			) : (
				<button className='dashboard-seeker'onClick={postSeeker}>Post It</button>
			)}
		</div>
		);
}

export default CreateSeeker;