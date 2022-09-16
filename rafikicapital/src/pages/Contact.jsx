import React from 'react'
import Footer from '../Components/Footer'
import Links from '../Components/Links'
import Navbar from '../Components/Navbar'
import background from "../images/bg.jpg"
import { Card,Container} from 'react-bootstrap'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <Navbar/>
    <Links/>
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`}}>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
    <div className='w-100' style={{maxWidth: "400px" }}>
    <>
    <Card style={{backgroundColor: '#088752', height:'70vh', borderRadius:'25px', opacity:'0.9'}}>
        <Card.Body>
      <form onSubmit={onSubmit}>
        <div className="mb-4" >
          <input className="form-control" type="text" id="firstName" required style={{ borderRadius:'25px', borderColor: '#FCE205'}} placeholder="Enter your first name"/>
        </div>
         <div className="mb-4" >
          <input className="form-control" type="text" id="lastName" required style={{ borderRadius:'25px', borderColor: '#FCE205'}} placeholder="Enter your last name"/>
        </div>
        <div className="mb-4" >
          <input className="form-control" type="email" id="email" required style={{ borderRadius:'25px', borderColor: '#FCE205'}} placeholder="Enter your email"/>
        </div>
        <div className="mb-4"  >
          <textarea className="form-control  " id="message" required style={{ borderRadius:'25px', borderColor: '#FCE205'}} placeholder="Add text"/>
        </div>
        <div style={{display: 'flex',justifyContent: 'center'}}>
        <button className="btn w-50 " type="submit"  style={{backgroundColor: '#FCE205', borderRadius:'25px', borderColor: '#138808'}}>
          {formStatus}
        </button>
        </div>
      </form>
      </Card.Body>
      </Card>
      </>
      </div>
    </Container>
    </div>
    <Footer/>
    </>
  )
}
export default Contact