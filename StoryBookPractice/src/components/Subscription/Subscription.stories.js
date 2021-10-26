import React from "react"
import { Secondary, Success } from "../Button/Button.stories"
import { Large } from "../Input/Input.stories"




export default {
    title: 'form/Subscription'
}

export const PrimarySubscription = () => (
    <>
    <Large />
    <Success variant='success'>Success</Success>
    </>
)