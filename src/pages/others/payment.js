import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

function Payment() {
    return (
        <div>
            <h2>Select Payment Mode</h2>
            <Card variant="outlined" className='payment_box'>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2}>
                            <Typography variant="h6">$ 234</Typography>

                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Typography variant="body2">Cash on Delivery</Typography>

                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <CheckCircleIcon />

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Card variant="outlined" className='payment_online_box'>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2}>
                            <Typography variant="h6">$ 234</Typography>

                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Typography variant="body2">Pay Online</Typography>

                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <CheckCircleIcon />

                        </Grid>
                    </Grid>
                    <div style={{ margin: "30px 0" }}>
                        <h2>Last Used</h2>
                    </div>

                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={2}>
                            <Typography variant="h6">Logo</Typography>

                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Typography variant="body2">GPay</Typography>

                        </Grid>
                        <Grid item xs={2} sm={2}>
                            <RadioButtonCheckedIcon />
                        </Grid>
                    </Grid>

                    <div style={{ margin: "30px 0" }}>
                        <h2>Other Options</h2>
                    </div>


                    <Accordion className='accordtion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            className='panel1-header'
                        >
                            Pay by an UPI App
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='pay_Options'>
                                <p>Logo</p>
                                <p>GPay</p>
                                <RadioButtonCheckedIcon />
                            </div>
                            <div className='pay_Options'>
                                <p>Logo</p>
                                <p>PhonePay</p>
                                <RadioButtonCheckedIcon />
                            </div>
                            <div className='pay_Options'>
                                <Button variant='text'>ADD UPI ID +</Button>
                                <Button variant='text'>PAY BY ANY UPI APP </Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accordtion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className='panel1-header'
                        >
                            Wallet
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='pay_Options'>
                                <p>Logo</p>
                                <p>Mobikwik Wallet</p>
                                <RadioButtonCheckedIcon />
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accordtion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className='panel1-header'
                        >
                            Debit/Credit Cards
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='pay_Options'>
                                <Button variant='text'>ADD NEW CARD +</Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion className='accordtion'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                            className='panel1-header'
                        >
                            Net Banking
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className='pay_Options'>
                                <Button variant='text'>ADD NEW CARD +</Button>
                            </div>
                        </AccordionDetails>
                    </Accordion>

                </CardContent>
            </Card>
        </div>
    );
}

export default Payment;
