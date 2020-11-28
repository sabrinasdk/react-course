import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function Input(props) {
    return (
        <TextField
            id='outlined-search'
            label={props.label}
            type='search'
            variant='outlined'
            onChange={(e) => {
                props.ChangeFunc(e.target.value)
            }}
        />
    )
}
