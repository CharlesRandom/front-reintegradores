import React, { Component } from 'react'
import { Spin, message } from 'antd';
import './Auth.css'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {signup, login, getProfile} from '../../services/auth' 

class AuthPage extends Component {
  state={
    user:{},
    current:{},
    loading:false
  }
  
  authError = e => {
    message.error(e);
    this.setState({loading:false})
  };

  signup = e => {
    this.setState({loading:true})
    const {user} = this.state
    e.preventDefault()
    signup(user)
      .then(r=>{
        if(r._id){
          this.props.history.push('/login')
        }
        else {
          console.log('Something went wrong, try sign up again')
          this.authError('Something went wrong, try sign up again')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Something went wrong, try sign up again')
      })
  }

  login = e => {
    this.setState({loading:true})
    const {user} = this.state
    e.preventDefault()
    login(user)
      .then(r=>{
        if(r._id){
          console.log('logged')
          getProfile(r._id)
          .then(r=>{
            localStorage.setItem('loggedUser',JSON.stringify(r))
            this.props.history.push('/profile')
          })
        }
        else {
          console.log('Something went wrong, please check credentials')
          this.authError('Something went wrong, please check credentials')
        }
      }).catch(e=>{
        console.log(e)
        this.authError('Something went wrong, please check credentials')
      })
  }

  handleText = e => {
    const {user} = this.state
    const field = e.target.name
    const value = e.target.value
    user[field] = value
    this.setState({user})
  }

  onRadioChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
    const {current} = this.state
    const field = e.target.name
    const value = e.target.value
    current[field] = value
    console.log(current)
    this.setState({current})
  }

  render() {
      const {pathname} = this.props.location
      const { signup, login, handleText, onRadioChange } = this
      const {loading, current} = this.state
    return (
      <div className="auth">
        <div className="auth-container">
          <div>
            {pathname==='/login'?
            <div>
              {!loading ? <LoginForm login={login} handleText={handleText}/> : <Spin tip="Loading...">
              <LoginForm login={login} handleText={handleText}/>
              </Spin>}
            </div>
            :
            <div>
              {!loading ? <SignupForm signup={signup} handleText={handleText} onRadioChange={onRadioChange} current={current}/> : <Spin tip="Loading...">
              <SignupForm signup={signup} handleText={handleText} onRadioChange={onRadioChange}/>
              </Spin>}
            </div>
            }
          </div>          
        </div>
      </div>
    )
  }
}

export default AuthPage