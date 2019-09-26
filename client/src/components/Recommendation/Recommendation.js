import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import "./Recommendation.scss";
export default function Recommendation() {

    return (
        <>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="recs-header">
                            General Packing Tips to Help Lighten the Load
             </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <ul>
                                <li className="tip">Wear, don't pack, heavy items like coats or boots.</li>
                                <li className="tip">Invest in packable items like rainjackets/down coats/etc.</li>
                                <li className="tip">Only special circumstances require packing more than 2 pairs of shoes.</li>
                                <li className="tip">Travel-sized toiletries are a must.</li>
                                <li className="tip">Packing cubes are your best friend.</li>
                                <li className="tip">Think of what you'll be doing and then pack for that. Don't pack for the "may do's".</li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" className="recs-header">
                            Trips 1-2 Days Long
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <p className="tip">General rule of thumb is wear one, pack one or two.</p>
                            <p className="tip">Try to pack 3 to 4 total items of clothing, depending on trip length.</p>
                            <p className="tip">For example, a 2 day trip could look like 2 shirts, 1 jacket, and 1 pair of pants, but make it work for you!</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2" className="recs-header">
                            Trips 3-4 Days Long
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>
                            <p className="tip">This is the perfect "long-weekend" style trip, so try to take advantage of hotel toiletries and pack light where you can spare.</p>
                            <p className="tip">Try to pack 5 to 6 total items of clothing, depending on trip length.</p>
                            <p className="tip">For example, a 3 day trip could look like 2 shirts, 1 jacket, 1 pair of pants.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="3" className="recs-header">
                            Trips 5-7 Days Long
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body>
                            <p className="tip">This is where the rules change a little bit. This length of trip is usually just long enough to be inconvenient to do laundry, but still short enough to validate light packing.</p>
                            <p className="tip">General rule of thumb is one pair of bottoms can be mixed and matched with 3 different tops. </p>
                            <p className="tip">Using this 3x1 guideline, a 7 day trip warrants 4-5 tops and 1-2 pairs of bottoms. It's also a good idea to pack workout clothes/running shoes if you're into that sort of thing. </p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="4" className="recs-header">
                            Trips 8-10 Days Long
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                        <Card.Body>
                            <p className="tip">This is the level where the next question will be important. Will you be able to do laundry during this trip, including taking a travel-sized Tide and doing some sink laundry?</p>
                            <p className="tip">If you answered yes to laundry, then you get to use the 5x2 rule where you get 5 shirts and 2 bottoms! If no laundry is in your future, no worries, just adjust the 3x1 rule for 3 tops per bottom!</p>
                            <p className="tip">A trip of 10 days without laundry could look like 7-8 tops and 2 bottoms, plus whatever weather related necessities you should bring!</p></Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="5" className="recs-header">
                            Over 10 Days
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                        <Card.Body> 
                            <p className="tip">This is basically a trick, because other than clean undies and socks, you can get away with packing for 7-10 days and rewearing items as necessary.</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </>
    )
};

