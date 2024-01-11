import { Calender, Clock, Globe, TimerIcon } from '../../svg/svg';
import './ScheduleMeet.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { ScheduleMeeting } from 'react-schedule-meeting';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import useMediaQuery from '@mui/material/useMediaQuery';

const State = [
    {
        value: 'Madhya Pradesh',
        label: 'Madhya Pradesh',
    },
    {
        value: 'Maharashtra',
        label: 'Maharashtra',
    },
    {
        value: 'Telangana',
        label: 'Telangana',
    },
    {
        value: 'Rajasthan',
        label: 'Rajasthan',
    },
];

const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
    return {
        id,
        startTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0)),
        endTime: new Date(new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0)),
    };
});

function ScheduleMeet() {

    const matches = useMediaQuery('(min-width:600px)');

    return (
        <div className="main">
            <h1>Schedule Your <span style={{ color: '#015030' }}>FREE, NO</span> Obligation Consultation</h1>
            <div className='container-schedule-meet'>
                <div style={{
                    borderRight: !matches ? '' : "1px solid gray",
                    borderBottom: matches ? '' : "1px solid gray",
                    marginBottom: !matches ? '' : "10px",
                    maxWidth: matches ? "400px" : "100%",
                    padding: matches ? "0px 6px" : "",
                }}>
                    <h5 className='meet-head'>Meeting Details</h5>
                    <div className='meet-details-section'>
                        <TimerIcon />
                        <span>30 min</span>
                    </div>
                    <div className='meet-details-section'>
                        <Calender />
                        <span>Friday Nov 3, 2023</span>
                    </div>
                    <div className='meet-details-section'>
                        <Clock />
                        <span>4:00 PM - 4:30 PM</span>
                    </div>
                    <div className='meet-details-section'>
                        <Globe />
                        <span>Mountain Standard Time (MST)</span>
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Name"
                                        defaultValue=""
                                    />
                                    </div>
                                    <div className='col-md-6'>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Phone Number"
                                        defaultValue=""
                                    />
                                    </div>
                                    
                                </div>
                                </div>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    defaultValue=""
                                /><TextField
                                    required
                                    id="outlined-required"
                                    label="Address Line 1"
                                    defaultValue=""
                                /><TextField
                                    required
                                    id="outlined-required"
                                    label="Address Line 2"
                                    defaultValue=""
                                /><TextField
                                    required
                                    id="outlined-required"
                                    label="City"
                                    defaultValue=""
                                />

                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="State"
                                    defaultValue="Madhya Pradesh"
                                    helperText="Please select your State"
                                >
                                    {State.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Zip Code"
                                    defaultValue=""
                                />
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Average Monthly Electric Bill"
                                    defaultValue=""
                                />
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    label="How Did You Hear About Us?"
                                    defaultValue=""
                                    helperText="Please select your State"
                                >

                                </TextField>
                                <div style={{ textAlign: "center" }}>
                                    <img src="/Images/captch.png" alt="captcha" />
                                    <div style={{ marginTop: "10px" }}>
                                        <button className='button-log'>Schedule</button>
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </div>
                </div>

                {/* Form section */}


                {/* calender section */}
                <div>
                    <h5 style={{ color: " #015030", fontWeight: "500", fontSize: "16px", margin: "0 37px" }}>Select Type, Date and Time of Meeting</h5>
                    <div className='radioStyle'>
                        <FormControl >
                            {/* <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel> */}
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel value="Virtual" control={<Radio color="success" />} label="Virtual" />
                                <p style={{ marginRight: "17px", fontWeight: "bold" }}>OR</p>
                                <FormControlLabel value="In-Person" control={<Radio color="success" />} label="In-Person" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <ScheduleMeeting
                        style={{ boxShadow: 'none !important' }}
                        borderRadius={10}
                        eventDurationInMinutes={30}
                        availableTimeslots={availableTimeslots}
                        onStartTimeSelect={console.log}
                        primaryColor="#015030"
                    />
                    {/* <Box>
                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-amount"
                                startAdornment={<InputAdornment position="start"></InputAdornment>}
                                label="Message"
                                defaultValue="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
                                multiline
                            />
                        </FormControl>
                    </Box> */}


                    <h1>Got Questions? Chat With Us.<span style={{ color: "#002013" }}>(480) 940-1201</span></h1>

                </div>

            </div>
        </div>
    )
}

export default ScheduleMeet;