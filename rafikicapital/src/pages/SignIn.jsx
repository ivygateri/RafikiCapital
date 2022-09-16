import React, {useRef, useState} from 'react'
import {Form, Button, Card, Alert, Container} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import {Link, useNavigate } from "react-router-dom"
import background from "../images/bg.jpg"

export default function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

   async  function handleSubmit(e){
        e.preventDefault()

        try{
        setError('')
        setLoading(true)
          await  login(emailRef.current.value, passwordRef.current.value)
            navigate('/')
        }catch{
            setError('Failed to sign in')
        }
        setLoading(false)

        
    }

  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundRepeat: `no-repeat`, backgroundSize:`cover`}}>
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
    <div className='w-100' style={{maxWidth: "400px" }}>
    <>
    <Card style={{backgroundColor: '#088752', height:'80vh', borderRadius:'25px', opacity:'0.9'}}>
        <Card.Body>
            <h2 className="text-center mb-4 text-white">Sign In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit = {handleSubmit}>
                <Form.Group id="email">
                   <Form.Label>Email</Form.Label> 
                   <Form.Control type="email" style={{borderRadius:'25px', borderColor:'#FCE205'}} ref={emailRef} required  placeholder='Enter your email' />
                </Form.Group>
                <Form.Group id="password">
                   <Form.Label>Password</Form.Label> 
                   <Form.Control type="password" style={{borderRadius:'25px', borderColor:'#FCE205'}} ref={passwordRef} required  placeholder='Enter your password' />
                </Form.Group>
                <br></br>
                <Button disabled={loading} className='w-100 text-black ' type="submit" style={{backgroundColor: '#FCE205', borderRadius:'25px', border: '#138808'}}>
                    Sign In
                </Button>
            </Form>
            <div className='w-100 text-center mt-3 ' >
                <Link to='/forgot-password' style={{color: 'black'}}>Forgot Password?</Link>
            </div>
        </Card.Body>
    </Card>
    <div className='w-100 text-center mt-2 text-yellow-400'> Don't have an account? 
         <Link to="/register" style={{color: '#fce205' }} > Register</Link>
    </div>
    </>
    </div>
    </Container>
    </div>
  )
}
