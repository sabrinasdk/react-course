import './App.css'
import Input from './input'
import Button from '@material-ui/core/Button'
import { useState } from 'react'
import Axios from 'axios'
import Alert from '@material-ui/lab/Alert'
//COMMENTAIRE EN PLUS .... !
function App() {
    const buttonClicked = () => {
        // Axios.post('http://41.107.152.129:3001/adduser', {
        //     nom,
        //     prenom,
        //     email,
        //     age,
        // }).then((res) => {
        //     console.log(res.data.updated)
        //     setShowAlert(res.data.updated)
        // })

        // setNumber(number + 1)

        let bool = true

        bool ? console.log('TRUE') : console.log('FALSE')

        if (bool) {
            console.log('TRUE')
        } else {
            console.log('FALSE')
        }
    }

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState('')

    const [number, setNumber] = useState(50)

    const [showAlert, setShowAlert] = useState(false)

    return (
        <div className='App' style={{ marginTop: '40px' }}>
            <div style={{ display: 'block' }}>
                <Input label='Nom' ChangeFunc={setNom} />
            </div>
            <div style={{ display: 'block', marginTop: '10px' }}>
                <Input label='Prenom' ChangeFunc={setPrenom} />
            </div>
            <div style={{ display: 'block', marginTop: '10px' }}>
                <Input label='E-mail' ChangeFunc={setEmail} />
            </div>
            <div style={{ display: 'block', marginTop: '10px', marginBottom: '30px' }}>
                <Input label='Age' ChangeFunc={setAge} />
            </div>

            <Button onClick={buttonClicked} variant='contained' color='secondary'>
                Secondary
            </Button>

            <p>{number}</p>

            <div style={{ width: '500px' }}>{showAlert ? <Alert severity='success'>This is a success alert — check it out!</Alert> : <br />}</div>
        </div>
    )
}

export default App
