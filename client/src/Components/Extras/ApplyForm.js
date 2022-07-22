import React, { useState } from 'react';
import { Grid, TextField, Checkbox } from '@mui/material';

// import { Alert, AlertTitle } from '@material-ui/lab';

const ApplyForm = () => {
	var modify = '';
	const [disabled, setDisabled] = useState(false);

	// const [sent, setSent] = useState(false);
	// const [mess, setMess] = useState('');
	// const [error, setError] = useState(false);
	// const [warning, setWarn] = useState(false);
	// const [errs, setErrs] = useState();
	const [formData, setFormdata] = useState({
		firstname: '',
		lastname: '',
		phonenumber: '',
		clientemail: '',
	});

	const { firstname, lastname, phonenumber, clientemail } = formData;

	const resetForm = (e) => {
		e.preventDefault();
		setFormdata({
			firstname: '',
			lastname: '',
			phonenumber: '',
			clientemail: '',
		});
		setDisabled(false);
	};

	const onChange = (e) => {
		setFormdata({ ...formData, [e.target.name]: e.target.value });
	};

	return (
		<form className='landingpage-form'>
			<div className='apply-now-form'>
				<h3>Contact Us Now</h3>

				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={6}>
						<TextField
							type='text'
							name='firstname'
							value={firstname}
							variant='filled'
							fullWidth
							id='firstname'
							label='First Name *'
							onChange={(e) => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TextField
							type='text'
							name='lastname'
							value={lastname}
							variant='filled'
							fullWidth
							id='lastname'
							label='Last Name *'
							onChange={(e) => onChange(e)}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={12} md={6}>
						<TextField
							type='text'
							name='phonenumber'
							value={phonenumber}
							variant='filled'
							fullWidth
							id='phonenumber'
							label='Main Phone *'
							onChange={(e) => onChange(e)}
						/>
					</Grid>
					<Grid item xs={12} sm={12} md={6}>
						<TextField
							type='text'
							name='clientemail'
							value={clientemail}
							variant='filled'
							fullWidth
							id='clientemail'
							label='Email *'
							onChange={(e) => onChange(e)}
						/>
					</Grid>
				</Grid>

				<Grid container>
					<Grid item xs={12}>
						<div className='check-box-container'>
							<Checkbox color='primary' />
							<span>I agree to the terms and conditions</span>
						</div>
					</Grid>
				</Grid>

				<div
					className='full'
					data-bind='visible: !$root.isSubmissionPeriodOpen()'
					style={{ display: 'none' }}
				>
					<div className='col-sm-12' data-bind='with: submissionData'>
						<div
							className='alert alert-danger alert-dismissible fade show'
							role='alert'
						>
							<button
								type='button'
								className='close'
								data-dismiss='alert'
								aria-label='Close'
							>
								<span aria-hidden='true'>&times;</span>
							</button>
							Please be advised that this is NOT YOUR OFFICIAL APPLICATION. We
							will send you a notification after <strong></strong> when you can
							come back online and officially sign and submit your application.
						</div>
					</div>
					<div className='col-sm-12'>
						<input
							type='submit'
							className='btn blue'
							style={{ cursor: 'pointer' }}
							value='SAVE & NOTIFY ME'
							data-bind='click: saveAndNotify'
						/>
					</div>
				</div>
			</div>
		</form>
	);
};

export default ApplyForm;
