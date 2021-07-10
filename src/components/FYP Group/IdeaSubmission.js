import React from 'react'
import { Form,Button} from 'react-bootstrap';
import { FilePicker, } from 'evergreen-ui';
function IdeaSubmission() {
    
    return (
        <div className=" shadow-lg w-100 d-flex justify-content-center align-items-center" style={{ height: "600px" }}>
            <div className=" w-75">
                <h2>Submit Idea Proposal</h2>
                <hr />
                <div className="mt-4">
                    <Form>
                        <Form.Group controlId="titlegroup">
                            {/* <Form.Label>Proposed Title</Form.Label> */}
                            <Form.Control type="text" placeholder="Proposed Title" />
                        </Form.Group>
                        <Form.Group controlId="outputgroup">
                            {/* <Form.Label>Expected Output</Form.Label> */}
                            <Form.Control type="text" placeholder="Expected Output e.g. Mobile App, Web App, etc." />
                        </Form.Group>
                        <Form.Group controlId="ideagroup">
                            {/* <Form.Label>Idea Note</Form.Label> */}
                            <Form.Control as="select">
                            <option> Select Supervisor</option>
                                
                                <option> Javed Abbasi</option>
                                <option>Dr. Abdul Rahman Soomrani</option>
                                <option> Khalid Hussain</option>
                                <option>Dr. Waqas Ahmed</option>
                                <option>Dr. Ghulam Mujtaba</option>
                                <option>Riaz Hussain</option>
                                <option>Dr. Syed Asif Raza</option>
                            </Form.Control>
                        </Form.Group><br />
                        <Form.Group>

                            <FilePicker
                                multiple
                                height={38}
                                width={400}
                                placeholder="Selected files here!"
                            />
                        </Form.Group>
                        <Button variant="primary" type="button" >
                            Submit Idea
                        </Button>

                    </Form>
                </div>
            </div>
            {/* <div>
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div> */}
        </div>
    )
}

export default IdeaSubmission
