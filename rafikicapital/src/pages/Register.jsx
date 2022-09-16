import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link, useNavigate } from "react-router-dom"
import background from "../images/bg.jpg"



export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const phoneRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()


  

   async  function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !==
             passwordConfirmRef.current.value){
                return setError('Passwords do not match')
             }

        try{
        setError('')
        setLoading(true)
           
          await  signup(emailRef.current.value, passwordRef.current.value)
          navigate('/')
        }catch{
            setError('Failed to create an account')
        }
        setLoading(false)

        
    }

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`}}>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
      <div className='w-100' style={{maxWidth: "400px"}}>
    <>
    <Card style={{backgroundColor: '#088752', height:'80vh', borderRadius:'25px', opacity:'0.9'}}>
        <Card.Body>
            <h2 className="text-center mb-4 text-white">Register</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit = {handleSubmit}>
                <Form.Group id="email">
                   <Form.Label>Email</Form.Label> 
                   <Form.Control type="email" style={{borderRadius:'25px', borderColor:'#FCE205', flex:'1'}} ref={emailRef} required  placeholder='Enter your email'/> 
                </Form.Group>
                <Form.Group id="password">
                   <Form.Label>Password</Form.Label> 
                   <Form.Control type="password"  style={{borderRadius:'25px', borderColor:'#FCE205'}} ref={passwordRef} required  placeholder='Enter your password' />
                </Form.Group>
                <Form.Group id="password-confirm">
                   <Form.Label>Password Confirmation</Form.Label> 
                   <Form.Control type="password"  style={{borderRadius:'25px', borderColor:'#FCE205'}} ref={passwordConfirmRef} required  placeholder='Confirm your password'  />
                </Form.Group>
                <Form.Group id="phone">
                   <Form.Label>Phone</Form.Label> 
                   <Form.Control type="phone" style={{borderRadius:'25px', borderColor:'#FCE205'}} ref={phoneRef} required placeholder='Enter your phone number'/>
                </Form.Group>
                <br></br>
                <Button disabled={loading} className='w-100 text-black' type="submit" style={{backgroundColor: '#FCE205', borderRadius:'25px', border: '#138808'}}>
                    Register
                </Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2 text-yellow-400'>
        Already have an account? <Link to= "/signin" style={{color: '#fce205' }}> Sign In</Link>
    </div>
    </>
    </div>
    </Container>
    </div>
    
  )
}
